document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitbtn");
    const userInput = document.getElementById("userinput");

    submitBtn.addEventListener("click", function () {
        // Get the task input value
        const taskInput = userInput.querySelector(".task-input").value;

        if (taskInput.trim() !== "") {
            // Create a new checklist item
            const checklistItem = document.createElement("div");
            checklistItem.classList.add("checklist-item");

            // Create checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            // Create task input
            const taskInputField = document.createElement("input");
            taskInputField.type = "text";
            taskInputField.classList.add("task-input");
            taskInputField.value = taskInput;

            // Append checkbox and task input to the checklist item
            checklistItem.appendChild(checkbox);
            checklistItem.appendChild(taskInputField);

            // Add event listener to checkbox
            checkbox.addEventListener("change", function () {
                if (checkbox.checked) {
                    taskInputField.style.textDecoration = "line-through";
                } else {
                    taskInputField.style.textDecoration = "none";
                }
            });

            // Append the checklist item to the container
            const container = document.querySelector(".container");
            container.appendChild(checklistItem);

            // Clear the input field
            userInput.querySelector(".task-input").value = "";
        }
    });
});