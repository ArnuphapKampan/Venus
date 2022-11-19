const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const { readdirSync } = require('fs')
require('dotenv').config();

//App
const app = express()

//Connect DB PORT
const port = process.env.PORT || 8000
app.listen(port,() => console.log('Server is running on port',port))

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"2mb"}))
app.use(cors())

//Import Routes AUTO
readdirSync('./routes')
.map((r) => app.use("/api",require('./routes/'+r)))