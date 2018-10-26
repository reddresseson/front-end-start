//start...

//input 입력받기
var input = document.getElementById('memo');
var form = document.querySelector('.new-task');
var list = document.getElementById('list');

//debugger//이걸 찍으면 코드가 한 줄 씩 멈춤

function addTodo(event){//event handler라서 인자로 event가 넘어옴
    // if(event.keycode === 13){ //엔터 쳤을 때만
    //     var value = input.value;
    //     console.log("addTodo 됐니?");
    // }
    
    var todo = input.value;
    console.log(todo);
    insertTodo(todo);

    input.value = '';
    event.preventDefault();//기본 행동 중지
}


//input.addEventListener('keydown', addTodo);


form.addEventListener('submit', addTodo); //enter를 칠 때만 submit이 될것임

function insertTodo(todo){//ul에다가 얘를 넣으면 됨

    var html = `<li>
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked">
    <span class="text">${todo}</span>
  </li>`

  list.innerHTML += html;
}
