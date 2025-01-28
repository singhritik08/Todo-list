let todoInput = document.getElementById('todoInput');
let todoList = document.getElementById('todoList');
let editMode = false;
let currentEditElement = null;

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText) {
    if (editMode && currentEditElement) {
      currentEditElement.querySelector('.task-text').textContent = todoText;
      resetEditMode();
    } else {
      const li = document.createElement('li');
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('checkbox');
      checkbox.onclick = function () {
        li.classList.toggle('completed');
      };

      const textNode = document.createElement('span');
      textNode.classList.add('task-text');
      textNode.textContent = todoText;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function () {
        editTask(li, textNode.textContent);
      };

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function () {
        li.remove();
      };

      li.appendChild(checkbox);
      li.appendChild(textNode);
      li.appendChild(editButton);
      li.appendChild(deleteButton);

      todoList.appendChild(li);
    }

    todoInput.value = '';
  }
}

function editTask(li, currentText) {
  editMode = true;
  currentEditElement = li;
  
  todoInput.value = currentText;
}

function resetEditMode() {
  editMode = false;
  currentEditElement = null;
}

todoInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});
