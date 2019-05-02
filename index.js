// based on https://medium.com/@atingenkay/creating-a-todo-app-with-node-js-express-8fa51f39b16f
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
let saves = 0
let smokes = 0
let price = 1

app.use(bodyParser.urlencoded({ extended: true }))
.set('view engine', 'ejs')
.use(express.static('public'))
.post('/addsave', addsave)
.post('/removesave', removesave)
.post('/addsmoke', addsmoke)
.post('/removesmoke', removesmoke)
.get('/', overview)
.listen(3000, function(){
  console.log(`Example app listening on port ${port}!`)})

function overview(req, res) {
    res.render('index', { saves: saves, smokes: smokes})
}

function addsave(req, res) {
    saves++
    res.redirect('/')
}

function removesave(req, res) {
    saves--
    res.redirect('/')
}

function addsmoke(req, res) {
    smokes++
    res.redirect('/')
}

function removesmoke(req, res) {
    smokes--
    res.redirect('/')
}

// const newTask = req.body.newtask
// // task.push(newTask)
// const newCategory = req.body.category
// // category.push(newCategory)
// tasks.push({
//   // id: req.dataset.id,
//   name: newTask,
//   category: newCategory,
//   checked: false,
//   completed: false
// })
// res.redirect('/')



// function completesave(req, res){
//     const dataId = saves.dataid
//
// saves.forEach((save) => {
//     for (let dataId in saves) {
//       if (saves.dataId == dataId) {
//          saves.completed = true
//       }
//       res.redirect('/')
//     }
//   })
// }
