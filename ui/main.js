console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML = "Modified Text to New value";

var img = document.getElementById("logo");

var marginLeft = 0;
function moveRight(){
  marginLeft = marginLeft+1;
  img.style.marginLeft = marginLeft+'px';
}

img.onclick = function(){
    
    var interval = setInterval(moveRight,50);
    //img.style.marginLeft="100px";
};
