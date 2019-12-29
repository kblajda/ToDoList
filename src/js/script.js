const toDoList = [];
const form = document.querySelector('.toDoForm')
const taskList = document.querySelector('.toDoList__list');
const taskNumber = document.querySelector('.toDoForm__counter span');
const listItem = document.getElementsByClassName('toDoList__item');
const inputTask = document.querySelector('.toDoForm__input')




//function to add task on task list.
const addTask = (e) => {
    e.preventDefault();
    const taskName = inputTask.value;
    if (taskName === "") return;
    const newTask = document.createElement('li');
    newTask.className = 'toDoList__item';
    newTask.innerHTML = taskName + "<button>Delete</button>";
    toDoList.push(newTask);
    renderList();
    taskList.appendChild(newTask);
    inputTask.value = "";
    taskNumber.textContent = listItem.length;
    newTask.querySelector('button').addEventListener('click', removeTask);
}

// function to remove task from task list.
const removeTask = (e) => {
    //remove from array
    const index = e.target.parentNode.dataset.key; // take dataset remove elements form array
    toDoList.splice(index);
    taskNumber.textContent = listItem.length;
    renderList();
}

// function to render array elements, use in add & remove elements
const renderList = () => {
    taskList.textContent = "";
    toDoList.forEach((toDoItem, key) => { // Add task to array, add dataset to array elements
        toDoItem.dataset.key = key;
        taskList.appendChild(toDoItem);
    })
}


form.addEventListener('submit', addTask);