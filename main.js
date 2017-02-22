const express = require('express');
const logger = require('morgan')
const app = express();

const bodyParser = require('body-parser');
const middlewareLog = logger('dev')

//Imports from tasks.js
const allTasks = require('./app/tasks')

var arrayTask = allTasks.taskList
var Task = allTasks.Task
var deleteTask = allTasks.deleteTask



app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use( middlewareLog )

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req,res)=> {
  res.render('layout', { arrayTask});
});


app.get('delete/:id', (req, res) => {
  var id = +req.params.id;
  deleteTask(id);
  console.log(arrayTask)
  res.redirect('/'); 
})


app.get('/completed', (req,res)=> {
  res.render('completed');
});


app.post('/', (req,res) => {
  var newTask = new Task(arrayTask.length+1, req.body.newTask, new Date().toDateString())
  arrayTask.push(newTask);
  res.redirect('/');  
});





app.listen(3000,()=> (console.log('Listening at port 3000...')));


