/*var dom = document.getElementById('debug');

//console.log(dom);

var dom2 = document.querySelectorAll('div');

console.log(dom2);*/

var div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "<h3>개개개개ㅐ개쩐다</h3>"; //DOM으로 반영되고 <h3>이 텍스트로 반영되는게 아님
document.body.appendChild(div);
