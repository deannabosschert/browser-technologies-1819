// based on https://medium.com/@atingenkay/creating-a-todo-app-with-node-js-express-8fa51f39b16f
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
let tasks = ['']


app.use(bodyParser.urlencoded({ extended: true }))
.set('view engine', 'ejs')
.use(express.static('public'))
.post('/addtask', addTask)
.post('/completeTask', completeTask)
.get('/', shoppingList)
.listen(3000, function(){
  console.log(`Example app listening on port ${port}!`)})

function shoppingList(req, res) {
    res.render('index', { tasks: tasks})
}

function addTask(req, res) {
    const newTask = req.body.newtask
    // task.push(newTask)
    const newCategory = req.body.category
    // category.push(newCategory)
    tasks.push({
      // id: req.dataset.id,
      name: newTask,
      category: newCategory,
      checked: false,
      completed: false
    })
    res.redirect('/')
}

function completeTask(req, res){
    const dataId = tasks.dataid

tasks.forEach((task) => {
    for (let dataId in tasks) {
      if (tasks.dataId == dataId) {
         tasks.completed = true
      }
      res.redirect('/')
    }
  })
}
