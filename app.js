const express = require('express')
const app = express()
const port = 3000
app.get('/',(req, res) => {
    res.redirect('/movies')
})

app.get('/movies', (req, res) => {
    res.send('<h1>listing movies<h1>')
})

app.get('/movie/:id', (req, res) => {
    const id = req.params.id
    res.send(`read movie:${id}`)
})

app.listen(port, () => {
    console.log(`express server in running on http://localhost:${port}`)
})