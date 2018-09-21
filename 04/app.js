var wrap = document.getElementById('wrap');
var str = "";

for(var i=0; i<4; i++){
    if(i%2){
        str += "<div class='b'></div><div class='w'></div><div class='b'></div><div class='w'></div>"
    }
    else{
        str += "<div class='w'></div><div class='b'></div><div class='w'></div><div class='b'></div>"
    }
}

wrap.innerHTML = str;

// var board = document.getElementById("board");
//     for(var i=0; i<4; i++){
//         for(var j=0; j<4; j++){
//             // TODO : 여기에 필요한 코드를 작성해주세요.
//         }
//     }