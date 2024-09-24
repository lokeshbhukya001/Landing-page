// script.js

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') return; // Avoid empty tasks

    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;
    
    taskItem.appendChild(taskText);
    
    // Mark as completed
    taskText.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => editTask(taskItem, taskText);
    taskItem.appendChild(editBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteTask(taskItem);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
    taskInput.value = ''; 
}

function editTask(taskItem, taskText) {
    const newTaskValue = prompt('Edit your task:', taskText.textContent);
    if (newTaskValue !== null && newTaskValue.trim() !== '') {
        taskText.textContent = newTaskValue.trim();
    }
}
function deleteTask(taskItem) {
    taskItem.remove();
}
