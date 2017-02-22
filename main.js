const express = require('express');
const logger = require('morgan')
const app = express();

const bodyParser = require('body-parser');
const middlewareLog = logger('dev')

//Imports from tasks.js
const allTasks = require('./app/tasks')


var Task = allTasks.Task

var arrayTask = [];


app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use( middlewareLog )

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', getAllTasks)

//delete tasks
app.get('/delete/:id', deleteTask)


app.get('/completed:id', (req,res)=> {
  res.render('completed');
});

//adding tasks
app.post('/', addTask)


app.listen(3000,()=> (console.log('Listening at port 3000...')));



//Helper funcitons

function getAllTasks (req,res) {
  res.render('list', { arrayTask});
}

function addTask (req,res) {
  var newTask = new Task(getMaxId(arrayTask)+1, req.body.newTask)
  arrayTask.push(newTask);
  res.redirect('/')
}

function deleteTask (req,res)  {
  var index = arrayTask.findIndex((elem) => elem.id === +req.params.id)
  arrayTask.splice(index,1);
  res.redirect('/'); 
};



// more functions

function getMaxId (aIdTasks) {
  let id = aIdTasks.reduce((acc, elem) => Math.max(acc, elem.id), 0)
  return id
}

