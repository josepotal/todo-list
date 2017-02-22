
//const taskList = require('./posts.json');
var arrayTask = [];
 
exports.taskList = arrayTask;


function Task(id, name, creationDate, completedDate) {
  this.id = id;
  this.name = name;
  this.creationDate = creationDate;
  this.completedDate = completedDate;
}

exports.Task = Task

addNewTask = () => {
  //var newTask = new Task(arrayTask.length+1, req.body.newTask, new Date().toDateString());
  //return newTask
}

exports.addNewTask = addNewTask

deleteTask = id => {
  arrayTask.splice(id,1)
  return arrayTask
};

exports.deleteTask = deleteTask;
 
// exports.getBlogEntry = (id) => 
//     entries.find( post => post.id === +id)
