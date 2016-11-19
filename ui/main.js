//code for counter end point
var button = document.getElementById('counter');

button.onclick = function(){
  
  // make a request object
  var request = new XMLHttpRequest();
  
  // capture the response into a var
  request.onreadystatechange = function (){
     if (request.readyState === XMLHttpRequest.Done) // httprequest is completed
     {
         if (request.status == 200)
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