let inputBox = document.getElementById("inputBox");
let addTodo = document.getElementById("addTodo");
let todoList = document.getElementById("todoList");

addTodo.addEventListener("click", function () {
  let list = document.createElement("li");

  if (!inputBox.value) {
    alert("입력해 주세요!");
  } else {
    list.innerText = inputBox.value; // 요기 헷갈림
    todoList.appendChild(list);
    inputBox.value = "";
  }

  list.addEventListener("click", function () {
    list.style.textDecoration = "line-through";
  });
  list.addEventListener("dblclick", function () {
    todoList.removeChild(list);
  });
});
