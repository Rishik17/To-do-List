document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        const li = document.createElement('li');
        const taskNumber = document.createElement('span');
        const taskContent = document.createElement('span');
        const deleteBtn = document.createElement('button');

        taskNumber.classList.add('task-number');
        taskContent.textContent = taskText;
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            updateTaskNumbers();
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(taskNumber);
        li.appendChild(taskContent);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
        updateTaskNumbers();
    }
}

function updateTaskNumbers() {
    const taskList = document.getElementById('taskList');
    const tasks = taskList.getElementsByTagName('li');

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].querySelector('.task-number').textContent = (i + 1) + '. ';
    }
}
