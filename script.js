const inputElement = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTask");

// Function to add a task to the list
function addTask() {
    // Get the input value
    const inputValue = inputElement.value.trim(); // Use trim() to remove leading/trailing whitespace

    // Check if the input value is not empty
    if (inputValue !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        
        // Set the text of the list item to the input value
        listItem.textContent = inputValue;

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        inputElement.value = "";

        // Optionally, you can add event listeners to the list item for marking tasks as complete or deleting them.
    }
}

// Add a click event listener to the "Add" button
addTaskButton.addEventListener("click", addTask);


// Function to delete a task
function deleteTask(event) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
}

// Function to add a task to the list
function addTask() {
    // Get the input value
    const inputValue = inputElement.value.trim();

    if (inputValue !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = inputValue;

        // Create a "Delete" button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        // Add a click event listener to the "Delete" button
        deleteButton.addEventListener("click", deleteTask);

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        inputElement.value = "";
    }
}

// Add a click event listener to the "Add" button
addTaskButton.addEventListener("click", addTask);



