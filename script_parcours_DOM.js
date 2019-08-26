var x = document.getElementsByTagName("p");
console.log(x.length);

var y = document.getElementById("coucou");
console.log(y.textContent);

var z  = document.getElementsByTagName('a');
console.log(z[2].href);

var a = document.getElementsByClassName('compte-moi');
console.log(a.length);

var b = document.querySelectorAll('li.compte-moi');
console.log(b.length);

var element = document.querySelectorAll(" ol li.compte-moi");
console.log(element.length);

