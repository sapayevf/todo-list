const input = document.getElementById("input");
const buttonAdd = document.getElementById("buttonAdd");
const todoList = document.getElementById("todo-list");

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  createTodo();
});

function createTodo() {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const buttonEdit = document.createElement("button");
  const buttonDelete = document.createElement("button");

  checkbox.type = "checkbox";
  label.innerHTML = input.value;
  checkbox.addEventListener("change", () => {
    label.style.textDecoration = checkbox.checked ? "line-through" : "none";
    label.style.fontStyle = checkbox.checked ? "italic" : "normal";
    label.style.color = checkbox.checked ? "gray" : "black";
  });
  buttonEdit.innerHTML = "Edit";
  buttonEdit.classList.add("editBtn");
  buttonDelete.innerHTML = "Delete";

  li.append(checkbox, label, buttonEdit, buttonDelete);
  todoList.appendChild(li);

  buttonEdit.addEventListener("click", () => {
    const editToDo = prompt("Edit To Do:");
    if (editToDo !== "") {
      label.innerHTML = editToDo;
    }
  });

  buttonDelete.addEventListener("click", () => {
    li.remove();
  });

  buttonDelete.addEventListener("click", () => {});

  input.value = "";
}
