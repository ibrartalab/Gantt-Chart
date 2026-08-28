// Select html elements here
const body = document.getElementsByTagName("body");
const modal = document.getElementsByClassName("task-popup-modal");
const addNewTaskButton = document.getElementById("add-new-task-btn");
const closeModalButton = document.getElementById("btn-cancel");
const saveTaskButton = document.getElementById("btn-submit");
const tasksForm = document.getElementsByClassName("input-task-details");
const team = document.getElementById("task-team");

// Enable and disable modal popup for adding new task
addNewTaskButton.addEventListener("click", () => {
    modal[0].removeAttribute("hidden");
});

closeModalButton.addEventListener("click", () => {
    modal[0].setAttribute("hidden", true);
});

// Manage data in local storage for Gannt Chart UI
const companyInfo = localStorage.getItem("companyData");
console.log(companyInfo);


saveTaskButton.addEventListener("click", (event) => {
    event.preventDefault();

    const taskData = {
        id:`T${Math.floor(Math.random() * 1000)}`,
        taskName: tasksForm[0].taskName.value,
        startDate: tasksForm[0].startDate.value,
        endDate: tasksForm[0].endDate.value,
        duration: `${Math.ceil((new Date(tasksForm[0].endDate.value) - new Date(tasksForm[0].startDate.value)) / (1000 * 60 * 60 * 24))} Days`,
        dependencies: tasksForm[0].dependencies.value.split(",").map(dep => dep.trim()),
        resources:{
            id: `R${Math.floor(Math.random() * 1000)}`,
            team: tasksForm[0].team.value,
            assignee: tasksForm[0].assignee.value,
            assigneId: `A${Math.floor(Math.random() * 1000)}`,
        },
        notes: tasksForm[0].notes.value,
        milestones: false,
        progress: 0
    };

    // Save task data to local storage
    localStorage.setItem("taskData", JSON.stringify(taskData));
    modal[0].setAttribute("hidden", true);
});