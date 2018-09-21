var wrap = document.querySelector('.wrap');
var str = "";

//ver1
// for(var i=0; i<2; i++){
//     str += "<div class='b'></div><div class='w'> </div><div class='b'></div><div class='w'>  </div><div class='w'></div><div class='b'> </div><div class='w'></div><div class='b'></div>"
// }
// wrap.innerHTML = str; //DOM 접근은 횟수가 적을 수록 좋음.


//ver2
var bfirst = "<div class='b'></div><div class='w'></div>"
var wfirst = "<div class='w'></div><div class='b'></div>"

for(var i=0; i<4; i++)
{
    if(i%2===0)
        str += bfirst+bfirst;
    else
        str += wfirst+wfirst;
}
wrap.innerHTML = str;


// var board = document.getElementById("board");
//     for(var i=0; i<4; i++){
//         for(var j=0; j<4; j++){
//             // TODO : 여기에 필요한 코드를 작성해주세요.
//         }
//     }