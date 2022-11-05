const toDoForm = document.getElementById("todo-form");
const toDoUnput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const buton = document.createElement("button");
    li.id = newTodoObj.id;
    span.innerText = newTodoObj.text;
    buton.innerText = "❌";
    buton.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(buton);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoUnput.value;
    toDoUnput.value = "";
    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
