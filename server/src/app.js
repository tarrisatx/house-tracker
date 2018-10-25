const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//build express app now to build rest enpoints
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'hello tahara'
    })
})

app.listen(process.env.PORT || 8081)

console.log('home')