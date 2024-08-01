const express = require('express')
const app = express()
const port = 3000
app.get('/',(req, res) => {
    res.send('<h1>express app for movies<h1>')
})

app.listen(port, () => {
    console.log(`express server in running on http://localhost:${port}`)
})