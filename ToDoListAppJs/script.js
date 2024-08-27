const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Btn = document.getElementById("btn");

Btn.addEventListener("click", () => {
  let value = inputBox.value;
  let value1 = inputBox.getAttribute("");
  let elm = document.getElementById("elm");
  console.log(value1);

  if (value === "") {
    alert("Please enter a task!");
  } else {
    let li = document.createElement("li");
    li.textContent = value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    span.className = "rm ";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
