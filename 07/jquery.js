//document.querySelector('h1').innerHTML = 'hi';

//$('h1').html('hi'); //1번째 줄과 같은 의미. $표시가 중요

// for(var i=0; i<5; i++){
//     $('h1').fadeOut().delay(200).fadeIn();
// }



// var divs = document.querySelectorAll('div');
// for(var i=0; i<divs.length; i++) {
//     divs[i].style.backgroundColor = 'green';
// }



$('div')
    .css("background-color", "green")
    .css("border-color", "red")
    .css("width", "100px")
    .css("height", "100px");

//아래랑 위랑 다름, 아래는 변수로 한 번 지정해두는 방법

// var $div = $('div')

// $div
//     .css("background-color", "green")
//     .css("border", "1px solid red");


var $btn = $('#btn');
var $txt = $('#txt');
var $debug = $('#debug');

$btn.on('click', function(event){
    console.log('click');
    if($txt.val() === '') {
        alert('검색어를 입력해주세요.');
        return;
    }
    $debug.html($txt.val());
});