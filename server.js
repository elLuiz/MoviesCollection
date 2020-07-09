const express = require('express')
const app = express()
const mongoose = require("mongoose")
require('dotenv/config')

const postRoute = require("./routes/post");
const bodyParser = require('body-parser')
const cors = require("cors")
// Parser

const port = process.env.PORT || 5000
app.use(cors())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use('/post', postRoute)

// Connect to db
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},
()=>{
    console.log("connected to db")
})
app.listen(port, ()=>{
    console.log("connected to the server")
})
