Uncaught SyntaxError: Invalid or unexpected token
var title = document.getElementsById("title-footer");
VM12662:1 Uncaught TypeError: document.getElementsById is not a function
    at <anonymous>:1:22
(anonymous) @ VM12662:1
var title = document.getElementById("title-footer");
undefined
title
<h2 id=​"title-footer">​Hello World​</h2>​
title.onclick = function(){
        alert("you click here");

};
ƒ (){
        alert("you click here");

}
title.onmouseover = function(){
    alert("you good man");

};
ƒ (){
    alert("you good man");

}