var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne:{
        title:'Article One : Suresh ',
        heading:'Article One',
        date:'November 1, 2016',
        content:`
            <p>
                This is article one the content of which will be added shortly.
            </p>
            <p>
                This is the second para of the article which is yet to be modified.
            </p>
            <p>
                This is the third para of the article which is yet to be modified.
            </p>`
    
        },
    articleTwo:{
        title:'Article Two',
        heading:'Article Two',
        date:'November 10, 2016',
        content:`
            <p>
                This is article two the content of which will be added shortly.
            </p>
        `},
    articleThree:{
        title:'Article Three ',
        heading:'Article Three',
        date:'November 15, 2016',
        content:`
            <p>
                This is article three the content of which will be added shortly.
            </p>`
        }
};

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
app.get('/articleone', function (req, res) {
  res.send(CreateTemplate(articleOne));
});
app.get('/articletwo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});
app.get('/articlethree', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
