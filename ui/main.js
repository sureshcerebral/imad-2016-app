// username and password to login..
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
            console.log('user logged in');
            alert('Logged in successfully');
         } else if (request.status===403){
             alert('Username / password is incorrect');
         } else if (request.status===500){
             alert('Something went wrong in server');
         }
     }
     // else means do nothing and wait for it to complete..
      
  };
  // make the actual request to the web page
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://sureshcerebral.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    //request.open('GET','http://localhost:8080/submit-name?name='+name',true);
    request.send(JSON.stringify({username:username,password:password}));  
  
};
