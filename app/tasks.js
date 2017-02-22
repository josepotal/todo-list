// const bodyParser = require('body-parser');
// const middlewareLog = logger('dev')

//const taskList = require('./posts.json');
var arrayTask = [];
 
exports.arrayTask = arrayTask;


function Task(id, name) {
  this.id = id;
  this.name = name;
  this.creationDate = new Date().toDateString();
  this.completedDate = "";
}

exports.Task = Task

addNewTask = () => {
  //var newTask = new Task(arrayTask.length+1, req.body.newTask, new Date().toDateString());
  //return newTask
}

exports.addNewTask = addNewTask

 
// exports.getBlogEntry = (id) => 
//     entries.find( post => post.id === +id)
