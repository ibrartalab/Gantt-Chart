const closeModalButton = document.getElementById("btn-cancel");
const modal = document.getElementsByClassName("task-popup-modal");
const addNewTaskButton = document.getElementById("add-new-task-btn");
const overlayContainer = document.getElementsByClassName("overlay");
// Toggle Modal Visibility
// Show modal
addNewTaskButton.addEventListener("click", () => {
    modal[0].removeAttribute("hidden");
    overlayContainer[0].removeAttribute("hidden");
});
// Hide modal
closeModalButton.addEventListener("click", () => {
    modal[0].setAttribute("hidden", true);
    overlayContainer[0].setAttribute("hidden", true);
});