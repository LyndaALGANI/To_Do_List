const View = (() => {
  const app = document.getElementById('app');

  function createUI() {
    const form = document.createElement('form');
    form.id = 'taskForm';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Nouvelle tâche';
    input.id = 'taskInput';

    const select = document.createElement('select');
    select.id = 'taskCategory';

    ['travail', 'maison', 'divers'].forEach(cat => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
      select.appendChild(option);
    });

    const button = document.createElement('button');
    button.textContent = 'Ajouter';

    form.appendChild(input);
    form.appendChild(select);
    form.appendChild(button);

    const ul = document.createElement('ul');
    ul.id = 'taskList';

    app.appendChild(form);
    app.appendChild(ul);
  }

  function getInputValue() {
    return document.getElementById('taskInput').value.trim();
  }

  function getSelectedCategory() {
    return document.getElementById('taskCategory').value;
  }

  function clearInput() {
    document.getElementById('taskInput').value = '';
  }

  function displayTasks(tasks) {
    const ul = document.getElementById('taskList');
    ul.innerHTML = '';

    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.classList.add(`task-${task.category}`);

      const content = document.createElement('div');
      content.classList.add('task-content');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.done;
      checkbox.addEventListener('change', () => {
        onToggle(index);
      });

      const span = document.createElement('span');
      span.textContent = task.text;
      if (task.done) {
        span.classList.add('done');
      }

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '🗑️';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
        onDelete(index);
      });

      content.appendChild(checkbox);
      content.appendChild(span);
      content.appendChild(deleteBtn);

      li.appendChild(content);
      ul.appendChild(li);
    });
  }

  let onToggle = () => {};
  let onDelete = () => {};

  function bindToggle(handler) {
    onToggle = handler;
  }

  function bindDelete(handler) {
    onDelete = handler;
  }

  return {
    createUI,
    getInputValue,
    getSelectedCategory,
    clearInput,
    displayTasks,
    bindToggle,
    bindDelete
  };
})();
