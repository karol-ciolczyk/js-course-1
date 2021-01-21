var parent = document.getElementById("main-navigation").getElementsByTagName("ul")[0];
undefined
parent
<ul>​…​</ul>​
var child = parent.getElementsByTagName("li")[0];
undefined
child
<li>​<a href=​"#" class=​"current">​Bikes​</a>​</li>​
var removed = parent.removeChild(child);
undefined
parent.appendChild(removed);
<li>​…​</li>​