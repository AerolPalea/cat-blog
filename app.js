const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

app.set('view engine', 'ejs')



app.use(express.static(__dirname + "/css"))

app.get('/blog', (req, res) => {
    res.render('\index.ejs')
})

app.get('/articlepage', (req, res) => {
    res.render('\articlePage')
})

app.get('/', (req, res) => {
    res.redirect('/blog')
})

app.get('/about', (req, res) => {
    res.render('\about')
})

app.get('/contact', (req, res) => {
    res.render('\contact')
})

app.get('/cat-cafe-directory', (req, res) => {
    res.render('\directory')
})

app.get('/categories', (req, res) => {
    res.render('\categories')
})


app.listen(5000, () => {
    console.log('app listening on port 5000')
})

