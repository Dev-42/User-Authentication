const express = require('express')
const app = express()
const {authPage} = require('./middlewares')
const {authCourse} = require('./middlewares')

app.use(express.json())

app.get('/' , async(req,res) => {
    res.send("Home Page")
})

app.get('/course/grades' ,authPage(['teacher','admin']), async(req,res) => {
    res.send({
        aman : 100,
        mohit : 79,
        dev : 34,
        aman : 98
    })
})
app.get('/course/:number' ,authCourse, async(req,res) => {
    const number = req.params.number
    res.send(`You have permission to the course ${number}`)
})
app.listen(3000, () => {
    console.log("Server started successfully")
})