let inputField = document.querySelector(".input-field");
let addBtn = document.querySelector(".add-btn");
let listContainer = document.querySelector(".list-container");
let taskCount = 0;

function addTask() {
  if (inputField.value == "") {
    alert("You must enter something!!!");
  } else {
    let list = document.createElement("li");
    list.innerText = inputField.value;
    listContainer.append(list);

    let span = document.createElement("span");
    list.append(span);
    span.innerHTML = "\u00d7";
  }
  taskCount = taskCount + 1;
  inputField.value = "";
  console.log(taskCount);
  saveData();
  if (taskCount == 5) {
    listContainer.style.overflow = "auto";
  }
}

listContainer.addEventListener("click", (event) => {
  if (event.target.tagName == "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName == "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function displayData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

displayData();
