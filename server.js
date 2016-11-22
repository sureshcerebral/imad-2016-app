var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var Pool = require('pg').Pool;
var config = {
  user: 'sureshcerebral',
  database: 'sureshcerebral',
  host: 'db.imad.hasura-app.io',
  port: '5432',
  password: 'db-sureshcerebral-29517'
};
 //process.env.DB_PASSWORD

var pool = new Pool(config);

//var articles = {
//    articleOne:{
//        title:'Article One : Suresh ',
//        heading:'Article One',
//        date:'November 1, 2016',
//        content:`
//            <p>
//                This is article one the content of which will be added shortly.
//            </p>
//            <p>
//                This is the second para of the article which is yet to be modified.
//            </p>
//            <p>
//                This is the third para of the article which is yet to be modified.
//            </p>`
//    
//        },
//    articleTwo:{
//        title:'Article Two',
//        heading:'Article Two',
//        date:'November 10, 2016',
//        content:`
//            <p>
//                This is article two the content of which will be added shortly.
//            </p>
//        `},
//    articleThree:{
//        title:'Article Three ',
//        heading:'Article Three',
//        date:'November 15, 2016',
//        content:`
//            <p>
//                This is article three the content of which will be added shortly.
//            </p>`
//        }
//};

function CreateTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

    var htmlTemplate=`
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />  
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
            
                </div>
            </div>
        </body>
        </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/test-db', function(req, res){
  // make a request to the db with select
  
  pool.query('SELECT * FROM article',function(err,result){
      if (err){
        res.status(500).send(err.toString());    
      }
      else {
          res.send(JSON.stringify(result.rows));
      }
      
  });
  // get the response and display result
    
});
var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

var names=[];
app.get('/submit-name', function (req, res) {
    // get the name from request
    
    var name = req.query.name;
    names.push(name);
    //JSON .. Javascript Object Notation
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
    //articleName refers to the object names like articleOne etc..
    // eg - articleName == articleOne;
    //articles[articleName] = {} gives the content of articleOne object  
  var articleName = req.params.articleName;
  res.send(CreateTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/cerebral_logo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cerebral_logo.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
