const express = require('express')
const app = express()
const errorHandler = require('./src/middlewares/errorHandler.js')
const morgan = require('morgan')
const router = require('./src/routes/index.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/ping', (_, res) => {
    console.log("wanna a pong?")
    res.send("PONG")
})

// VIEW
app.set('view engine', 'ejs') // registra el motor de las plantillas
app.set('views', './views') // busca la carpeta de las plantillas

app.use('/', router)


// ERROR handlers
app.use(errorHandler)
app.use(morgan('dev'))

module.exports = app


