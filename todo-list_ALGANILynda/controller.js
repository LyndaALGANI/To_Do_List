import { AdvancedTask, Model } from './model.js';

const Controller = ((model, view) => {
  function init() {
    view.createUI();
    view.displayTasks(model.getTasks());

    const form = document.getElementById('taskForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const taskText = view.getInputValue();
      const category = view.getSelectedCategory();

      if (taskText !== '') {
        const newTask = new AdvancedTask(taskText, category);
        model.addTask(newTask);
        view.clearInput();
        view.displayTasks(model.getTasks());
      }
    });

    view.bindToggle((index) => {
      model.toggleTask(index);
      view.displayTasks(model.getTasks());
    });

    view.bindDelete((index) => {
      model.deleteTask(index);
      view.displayTasks(model.getTasks());
    });
  }

  return {
    init
  };
})(Model, View);

Controller.init();
