function test(){
    console.log("test()");
}

var id = setTimeout(test, 1000); //1초후 1번실행

var head = document.querySelector('head');
var script = document.createElement('script');
script.src = ".js";
head.appendChild(script);