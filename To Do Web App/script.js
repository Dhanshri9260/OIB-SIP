function addTask() {
    const title = document.getElementById("title");
    const description = document.getElementById("description");

    if (!title.value || !description.value) {
        title.reportValidity();
        description.reportValidity();
        return;
    }

    const taskRow = document.createElement("div");
    taskRow.className = "task-row";

    taskRow.innerHTML = `
        <div>${title.value}</div>
        <div>${description.value}</div>
        <div>
            <button class="complete-btn" onclick="completeTask(this)">✔</button>
            <button class="delete-btn" onclick="this.closest('.task-row').remove()">X</button>
        </div>
    `;

    document.getElementById("pendingList").appendChild(taskRow);

    title.value = "";
    description.value = "";
}

function completeTask(button) {
    const taskRow = button.closest(".task-row");
    button.remove(); // remove complete button

    document.getElementById("completedList").appendChild(taskRow);
}
