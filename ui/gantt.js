const body = document.getElementsByTagName("body");
const modal = document.getElementsByClassName("task-popup-modal");
const addNewTaskButton = document.getElementById("add-new-task-btn");
const closeModalButton = document.getElementById("btn-cancel");
const saveTaskButton = document.getElementById("btn-submit");
const tasksForm = document.getElementsByClassName("input-task-details");
const teamContainer = document.getElementById("task-team");
const assignee = document.getElementById("task-assignee");
const overlayContainer = document.getElementsByClassName("overlay");
const todoTaskContainer = document.getElementsByClassName("todo-todos");
const timeline = document.getElementsByClassName("s-date-e-date");
const dayNumber = document.getElementsByClassName("day-number");

// Toggle Modal Visibility
addNewTaskButton.addEventListener("click", () => {
    modal[0].removeAttribute("hidden");
    overlayContainer[0].removeAttribute("hidden");
});

closeModalButton.addEventListener("click", () => {
    modal[0].setAttribute("hidden", true);
    overlayContainer[0].setAttribute("hidden", true);
});

// Load local storage data here
const companyInfo = JSON.parse(localStorage.getItem("companyData"));
const tasksData = JSON.parse(localStorage.getItem("taskData"));

// Populating Dynamic Select Elements for team members and teams inputs fields

function insertIntoTaskForm() {
    if (companyInfo && companyInfo[0] && companyInfo[0].teams) {
        companyInfo[0].teams.forEach((team) => {
            const teamOption = document.createElement("option");
            teamOption.value = team.teamName;
            teamOption.textContent = team.teamName;
            teamContainer.appendChild(teamOption);

            team.teamMembers.forEach((member) => {
                const assigneeOption = document.createElement("option");
                assigneeOption.value = member.name;
                assigneeOption.textContent = `${member.name} - ${member.role}`;
                assignee.appendChild(assigneeOption);
            });
        });
    }
}

// Local storage managment factory function
function saveToLocalStorage(taskKey, taskData) {
    try {
        const stringified = JSON.stringify(taskData);
        localStorage.setItem(taskKey, stringified);
        return localStorage.getItem(taskKey) === stringified;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// Form extraction and task creation
function createTask() {
    saveTaskButton.addEventListener("click", (event) => {
        event.preventDefault();

        const formElement = tasksForm[0];
        console.log(tasksForm);
        console.log(formElement.taskName);
        
        // Extracted data matching precise HTML input 'name' attributes
        const taskData = [{
            id: `T${Math.floor(Math.random() * 1000)}`,
            taskName: formElement.taskName.value,
            startDate: formElement.startDate.value,
            endDate: formElement.endDate.value,
            duration: `${Math.ceil((new Date(formElement.endDate.value) - new Date(formElement.startDate.value)) / (1000 * 60 * 60 * 24))} Days`,
            dependencies: formElement.taskDependencies.value ? formElement.taskDependencies.value.split(",").map(dep => dep.trim()) : [],
            resources: {
                id: `R${Math.floor(Math.random() * 1000)}`,
                team: formElement.taskTeam.value,
                assignee: formElement["task-assignee"].value,
                assigneId: `A${Math.floor(Math.random() * 1000)}`,
            },
            notes: "",
            milestones: false,
            progress: 0
        }];

        const isSaved = saveToLocalStorage("taskData", taskData);

        // Output result response
        const toast = document.createElement("div");
        if (isSaved) {
            toast.classList.add("toast-success");
            toast.innerText = "Success done!";
            document.body.appendChild(toast);

            // Auto close modal view on success
            modal[0].setAttribute("hidden", true);
            overlayContainer[0].setAttribute("hidden", true);
            formElement.reset();
        } else {
            toast.classList.add("toast-error");
            toast.innerText = "Error!";
            document.body.appendChild(toast);
        }
    });
}

// Rendered tasks into the side navbar
function showTodoTasks(){
    
    const countSpan = document.getElementsByClassName("todos-count")[0];
    countSpan.textContent = `(${tasksData.length})`

    tasksData.map((task) => {
        const span = document.createElement("span");
        const spanRing = document.createElement("div");

        spanRing.classList.add("todo-task-ring");
        span.classList.add("todo-task");
        span.textContent = task.taskName;

        todoTaskContainer[0].appendChild(spanRing);
        todoTaskContainer[0].appendChild(span);
    });
}

function renderTimeline(){
    tasksData.forEach((task) => {
        const s = task.startDate.split("-");
        const e = task.endDate.split("-");
        const sFormate = `${s[1]} ${s[2]} - ${e[1]} ${e[2]}`;
        const span = document.createElement("span");
        span.classList.add("s-date-e-date-n");
        span.textContent = sFormate;
        timeline[0].appendChild(span);

        const numsArr = new Array();

        switch(s[1]){
            case "08":
                for (let index = 1; index <= 31; index++) {
                    numsArr.push(index);   
                }
        }

        numsArr.map((n) => {
            const span = document.createElement("div");
            span.classList.add("day-number-n");
            span.textContent = n;
            dayNumber[0].appendChild(span);
        })
    })
}



insertIntoTaskForm();
createTask();
showTodoTasks()
renderTimeline();
