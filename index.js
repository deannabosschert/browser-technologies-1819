// based on https://medium.com/@atingenkay/creating-a-todo-app-with-node-js-express-8fa51f39b16f
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const task = ['']
const complete = ['']
const port = 3000
const listName = ['']
const category = ['']
const taskWhole = task + category

app.use(bodyParser.urlencoded({ extended: true }))
.set('view engine', 'ejs')
.use(express.static('public'))
.post('/addtask', addTask)
.post('/removetask', moveTaskToComplete)
.get('/', shoppingList)
.listen(3000, function(){
  console.log(`Example app listening on port ${port}!`)})

function shoppingList(req, res) {
    res.render('index', { task: task, category: category, complete: complete, listName: listName})
}

function addTask(req, res) {
    const newTask = req.body.newtask
    task.push(newTask)
    const newCategory = req.body.category
    category.push(newCategory)
    res.redirect('/')
}

function moveTaskToComplete(req, res) {
    const completeTask = req.body.check
    //check for the 'typeof' the different completed task, then add into the complete task
    if (typeof completeTask === 'string') {
        complete.push(completeTask)
        //check if the completed task already exists in the task when checked, then remove it
        task.splice(task.indexOf(completeTask), 1)
    } else if (typeof completeTask === 'object') {
        for (const i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1)
        }
    }
    res.redirect('/')
}

// function moveTaskToComplete(req, res) {
//     const completeTask = req.body.task
//     //check for the 'typeof' the different completed task, then add into the complete task
//     if (typeof completeTask === 'string') {
//         complete.push(completeTask)
//         //check if the completed task already exists in the task when checked, then remove it
//         task.splice(task.indexOf(completeTask), 1)
//     } else if (typeof completeTask === 'object') {
//         for (const i = 0; i < completeTask.length; i++) {
//             complete.push(completeTask[i]);
//             task.splice(task.indexOf(completeTask[i]), 1)
//         }
//     }
//     res.redirect('/')
// }
