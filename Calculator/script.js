
function addTask() {
    const title = document.getElementById("title");
    const description = document.getElementById("description");

    if (title.value === "" || description.value === "") {
        title.reportValidity();
        description.reportValidity();
        return;
    }

    const taskRow = document.createElement("div");
    taskRow.className = "task-row";

    taskRow.innerHTML = `
        <div>${title.value}</div>
        <div>${description.value}</div>
        <button class="delete-btn" onclick="this.parentElement.remove()">X</button>
    `;

    document.getElementById("taskList").appendChild(taskRow);

    title.value = "";
    description.value = "";
}
