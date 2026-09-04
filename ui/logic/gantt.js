export const todoTaskContainer = document.getElementsByClassName("todo-todos");
export const timeline = document.getElementsByClassName("s-date-e-date");
export const dayNumber = document.getElementsByClassName("day-number");

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

showTodoTasks();
renderTimeline();
