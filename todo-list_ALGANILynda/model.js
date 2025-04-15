export class Task {
  constructor(text, done = false) {
    this.text = text;
    this.done = done;
  }
}

// Classe avancée avec catégorie
export class AdvancedTask extends Task {
  constructor(text, category, done = false) {
    super(text, done);
    this.category = category;
  }
}

// Singleton pour gérer les tâches
class TaskModel {
  constructor() {
    if (TaskModel.instance) {
      return TaskModel.instance;
    }
    this.tasks = [];
    TaskModel.instance = this;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  toggleTask(index) {
    this.tasks[index].done = !this.tasks[index].done;
  }

  getTasks() {
    return this.tasks;
  }
}

// Export du singleton
export const Model = new TaskModel();
