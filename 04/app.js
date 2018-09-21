var wrap = document.querySelector('.wrap');
var str = "";

//ver1
// for(var i=0; i<2; i++){
//     str += "<div class='b'></div><div class='w'> </div><div class='b'></div><div class='w'>  </div><div class='w'></div><div class='b'> </div><div class='w'></div><div class='b'></div>"
// }
// wrap.innerHTML = str; //DOM 접근은 횟수가 적을 수록 좋음.


//ver2
// var bfirst = "<div class='b'></div><div class='w'></div>" //black, white
// var wfirst = "<div class='w'></div><div class='b'></div>" //white, black

// for(var i=0; i<4; i++)
// {
//     if(i%2===0)
//         str += bfirst+bfirst;
//     else
//         str += wfirst+wfirst;
// }
// wrap.innerHTML = str; //체스판 뿌리는 html


//ver3
for(var i = 1; i <= 4; i++) {
    for(var j = 1; j <= 4; j++) {
        var k = 0;
        str += `<div class=${(i + j) % 2 == 1 ? 'b' : 'w'}></div>`;  
        k += 1;
    }
  }
wrap.innerHTML = str; //체스판 뿌리는 html


var blocks = document.querySelectorAll('.wrap > div'); //querySelectorAll로 가져오면 배열 형태로 가져옴
var selectedBlock = null;


blocks.forEach(function(block){
    block.addEventListener('click', function(event) {
        if(selectedBlock===block)
            return;

        if(selectedBlock){
            selectedBlock.className = selectedBlock.className.replace(' select', '');
          }

        selectedBlock = block;

        block.className += ' select'
    });
});




// for(i=0; i<16; i++) {
//     //console.log(blocks[i]);
//     blocks[i].addEventListener('click', function(event) {
//         debugger; //프로그램 짤 때 추적하기 위해서
//         blocks[i].style.backgroundColor = 'yellow';
//     });
// }