// const bodyParser = require('body-parser');
// const middlewareLog = logger('dev')

//const taskList = require('./posts.json');

function Task(id, name) {
  this.id = id;
  this.name = name;
  this.creationDate = new Date().toDateString();
  this.completedDate = "";
}

exports.Task = Task
