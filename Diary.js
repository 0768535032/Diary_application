document.getElementById("addTaskButton").addEventListener("click", addTask);
document.getElementById("saveDiary").addEventListener("click", saveDiaryEntry);

function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskTime = document.getElementById("taskTime").value;
    const taskDuration = document.getElementById("taskDuration").value;

    if (taskInput && taskDate && taskTime && taskDuration) {
        const taskList = document.getElementById("taskList");

        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <strong>${taskInput}</strong>
            <div class="task-details">
                Date: ${taskDate} | Time: ${taskTime} | Duration: ${taskDuration} hrs
            </div>
            <button onclick="deleteTask(this)">X</button>
        `;

        taskList.appendChild(listItem);

        // Clear input fields
        document.getElementById("taskInput").value = "";
        document.getElementById("taskDate").value = "";
        document.getElementById("taskTime").value = "";
        document.getElementById("taskDuration").value = "";
    } else {
        alert("Please fill out all fields.");
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}

function saveDiaryEntry() {
    const diaryEntry = document.getElementById("diaryEntry").value;
    if (diaryEntry) {
        alert("Diary entry saved!");
        document.getElementById("diaryEntry").value = "";
    } else {
        alert("Diary entry is empty.");
    }
}
