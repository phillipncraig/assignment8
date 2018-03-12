// require and configure knex first
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'todolist',
    user: '',
    password: ''
  }
});


// then connect bookshelf with knex
const bookshelf = require('bookshelf')(knex);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const Todo = bookshelf.Model.extend({
  tableName: 'todolist', // what you named your table as
})

app.get('/', (req, res) => {
  Todo.fetchAll()
    .then(todos => {
      res.json(todos.models.map(todo => todo.attributes))
    })
})

app.post('/add', (req, res) => {
  let newTodo = new Todo({
    title: req.body.title,
    // text: req.body.text,
    complete: req.body.complete
  })
  console.log(newTodo)
  newTodo.save()
    .then(newTodo => {
      console.log(newTodo)
      res.json(newTodo.attributes)
    })
  res.send('success!!')
})


app.get('/clear', (req, res) => {
  
  Todo.where({ complete: true })
    .destroy()
    .then((todos) => {
      Todo.fetchAll()
        .then(todos => {
          res.json(todos.models.map(todo => todo.attributes))
        })
    })
})

app.post('/:id', (req, res) => {
  let updatedTasks = {
    complete: req.body.complete
  }
  Todo.where({ id: req.body.id })
    .save(updatedTasks, { patch: true })
    .then((todo) => {
      Todo.fetchAll()
        .then(todos => {
          res.json(todos.models.map(todo => todo.attributes))
        })
    })
})

app.listen(8080)

