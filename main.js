const express = require('express');
const logger = require('morgan')
const app = express();

const bodyParser = require('body-parser');
const middlewareLog = logger('dev')

//Imports from tasks.js
const allTasks = require('./app/tasks')

var arrayTask = allTasks.arrayTask
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


app.get('/delete/:id', (req, res) => {
  var index = arrayTask.findIndex((elem) => elem.id === +req.params.id)
  arrayTask.splice(index,1);
  console.log(arrayTask)
  res.redirect('/'); 
})


app.get('/completed', (req,res)=> {
  res.render('completed');
});


app.post('/', (req,res) => {
  var newTask = new Task(getMaxId(arrayTask)+1, req.body.newTask)
  arrayTask.push(newTask);
  res.redirect('/');  
});





app.listen(3000,()=> (console.log('Listening at port 3000...')));



//Helper funcitons
deleteTask = id => {
  var index = ArrayfindIndex((elem) => elem.id === +req.params.id)
  arrayTask.splice(id,1)

  return arrayTask
};

// more functions

function getMaxId (aIdTasks) {
  let id = aIdTasks.reduce((acc, elem) => Math.max(acc, elem.id), 0)
  return id
}