const form = document.querySelector('.toDoForm')
const taskList = document.querySelector('.toDoList__list');
const taskNumber = document.querySelector('.toDoForm__counter span');
const listItem = document.getElementsByClassName('toDoList__item');
const inputTask = document.querySelector('.toDoForm__input')




//function to add task on task list.
const addTask = (e) => {
    e.preventDefault();
    const taskName = inputTask.value;
    // console.log(taskName);
    if (taskName === "") return;
    const newTask = document.createElement('li');
    newTask.className = 'toDoList__item';
    newTask.innerHTML = taskName + "<button>Delete</button>";
    taskList.appendChild(newTask);
    inputTask.value = "";
    taskNumber.textContent = listItem.length;
    newTask.querySelector('button').addEventListener('click', removeTask);
}

// function to remove task from task list.
const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItem.length;
}
form.addEventListener('submit', addTask);