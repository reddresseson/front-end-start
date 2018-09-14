function numsum(){
    var input = "haha";
    var sum = 0;
    while(input){
        input = prompt("숫자를 입력하세요!");
        input = parseInt(input, 10);
        console.log(input);
        sum += input;
    }
    alert("입력하신 숫자의 합은 "+sum+"입니다.");
}

numsum();