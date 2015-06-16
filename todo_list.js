var TodoList = function() {
  this.tasks = [];
};

TodoList.prototype.add = function(description) {
  var id = this.tasks.length + 1;
  var task = new Task(id, description);
  this.tasks.push(task);
};

TodoList.prototype.list = function() {
  this.tasks.forEach(function(task) {
    console.log(task);
  });
};

TodoList.prototype.remove = function(task) {
  var index = this.tasks.indexOf(task);
  if (index !== -1) {
    this.tasks.splice(index, 1);
  }
};

var Task = function(id, description) {
  this.id = id;
  this.description = description;
  this.completed = false;
};

Task.prototype.complete = function() {
  this.completed = true;
}
// Driver code

var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}