const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-btn");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", () => {
  const note = document.createElement("p");
  const delImg = document.createElement("img");
  note.className = "input-box";
  delImg.src = "images/delete.png";
  note.setAttribute("contenteditable", true);
  notesContainer.appendChild(note).appendChild(delImg);
});
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName == "P") {
    const notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
