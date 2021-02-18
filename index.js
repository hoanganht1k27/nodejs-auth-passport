const express = require('express')
const app = express()
const Port = 3000

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/hehe', (req, res) => {
    res.send("Hehe")
})

app.listen(Port, () => {
    console.log("Example app listening at port 3000")
})