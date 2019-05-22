// based on https://medium.com/@atingenkay/creating-a-todo-app-with-node-js-express-8fa51f39b16f
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').Server(app)
let saves = 0
let smokes = 0
let scrounges = 0
let price = 0.35
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
.set('view engine', 'ejs')
.use(express.static('public'))
.post('/addsave', addsave)
.post('/removesave', removesave)
.post('/addsmoke', addsmoke)
.post('/removesmoke', removesmoke)
.post('/addscrounge', addscrounge)
.post('/removescrounge', removescrounge)
.get('/', overview)
http.listen(port, function(){
  console.log(`Example app listening on port ${port}!`)})


function overview(req, res) {
    res.render('index', { saves: saves, smokes: smokes, scrounges: scrounges})
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

function addscrounge(req, res) {
    scrounges++
    res.redirect('/')
}

function removescrounge(req, res) {
    scrounges--
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
