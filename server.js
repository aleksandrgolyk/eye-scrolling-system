const express = require('express')
var app = express()

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(function () {
    // console.log('API app started')
})