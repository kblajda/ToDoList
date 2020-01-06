let toDoList = [];
const form = document.querySelector('.toDoForm')
const taskList = document.querySelector('.toDoList__list');
const taskNumber = document.querySelector('.toDoForm__counter span');
const listItem = document.getElementsByClassName('toDoList__item');
const inputTask = document.querySelector('.toDoForm__input--add');
const searchInput = document.querySelector('.toDoForm__input--search');

taskNumber.textContent = listItem.length;
toDoList = [...document.getElementsByClassName('toDoList__item')];

//function to add task to task list.
const addTask = (e) => {
    e.preventDefault();
    const taskName = inputTask.value;
    if (taskName === "") return;
    const newTask = document.createElement('li');
    newTask.className = 'toDoList__item';
    newTask.innerHTML = taskName + `<button class="toDoForm__bttn item__remove">Delete</button>`;
    toDoList.push(newTask);
    renderList();
    taskList.appendChild(newTask);
    inputTask.value = "";
    taskNumber.textContent = listItem.length;
    newTask.querySelector('.item__remove').addEventListener('click', removeTask);

}

// function to remove task from task list.
const removeTask = (e) => {
    //remove from array
    const index = e.target.parentNode.dataset.key; // take dataset remove elements form array
    toDoList.splice(index, 1);
    taskNumber.textContent = toDoList.length;
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

const searchTask = (e) => {
    const searchText = (e.target.value.toLowerCase());
    let tasks = [...listItem];
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
    console.log(tasks);
    taskList.textContent = "";

    tasks.forEach(task => taskList.appendChild(task));
    renderList()

}
searchInput.addEventListener('input', searchTask);
form.addEventListener('submit', addTask);