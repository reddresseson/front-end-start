var box = document.querySelector('.box');
var bg = document.querySelector('.bg');
var bgWidth = 500;
var boxWidth = 30;
var left = 5;
var top = 5; 

var score = 0; //점수
var miss = 0; //miss난 횟수


function random(max) {
    return Math.floor(Math.random() * max);
}

function move() {
    box.style.backgroundColor = "green";
    bg.style.backgroundColor = "white";
    var x = random(bgWidth - boxWidth);
    var y = random(bgWidth - boxWidth);
    console.log(x,y);


    box.style.left = x + 'px'; //lef가 100px이 됨
    box.style.top = y + 'px';
}

function catched(){
    score += 1;
    box.style.backgroundColor = "yellow";
    document.querySelector('.score').innerHTML = 'Score : ' + score ;
}
function misscatched(){
    bg.style.backgroundColor = "red";
}



box.addEventListener("click", catched);
bg.addEventListener("click", misscatched);

setInterval(move, 1000); //(function, delay)