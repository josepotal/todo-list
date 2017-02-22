var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=> {
  res.render('list')
})

app.get('/completed', (req,res)=> {
  res.render('completed')
})


app.listen(3000,()=> (console.log('Listening at port 3000...')))
