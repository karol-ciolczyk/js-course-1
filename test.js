var newLi = document.createElement("li");
undefined
newLi
<li>​</li>​
var newA = document.createElement("a");
undefined
newA
<a>​</a>​
var menu = document.getElementById("main-navigation").getElementsByTagName("ul")[0];
undefined
menu
<ul>​…​</ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​
menu.appendChild(newLi);
<li>​</li>​
newLi.appendChild(newA);
<a>​</a>​
newA.innerHTML = "News";
"News"
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0];
VM8172:1 Uncaught SyntaxError: missing ) after argument list
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);
<li>​…​</li>​<a>​News​</a>​</li>​