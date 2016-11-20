//code for counter end point
var button = document.getElementById('counter');

button.onclick = function(){
  
  // make a request object
  var request = new XMLHttpRequest();
  
  // capture the response into a var
  request.onreadystatechange = function (){
     if (request.readyState === XMLHttpRequest.DONE) // httprequest is completed
     {
         if (request.status === 200)
         {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
         }
     }
     // else means do nothing and wait for it to complete..
      
  };
  // make the actual request to the web page
  request.open('GET','http://sureshcerebral.imad.hasura-app.io/counter',true);
  request.send(null);

};

// name input display
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function(){
  
  // make a server request and send the name
  // make a request object
  var request = new XMLHttpRequest();
  
  // capture the response into a var
  request.onreadystatechange = function (){
     if (request.readyState === XMLHttpRequest.DONE) // httprequest is completed
     {
         if (request.status === 200)
         {
              var names = request.responseText;
              names = JSON.parse(names);
              var list = '';
              for (var i=0;i<names.length;i++){
                list += '<li>' + names[i] + '</li>';     
              }
              var sl = document.getElementById('nameList');
              sl.innerHTML = list;
         }
     }
     // else means do nothing and wait for it to complete..
      
  };
  // make the actual request to the web page
  request.open('GET','http://sureshcerebral.imad.hasura-app.io/counter',true);
  request.send(null);  
  
};
