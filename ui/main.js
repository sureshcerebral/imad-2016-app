console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML = "Modified Text to New value";

var img = document.getElementById("logo");

img.onclick = function(){
    img.style.marginLeft="100px";
};
