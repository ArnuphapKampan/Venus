const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
//Import Routes Example
// const personRoutes = require('./routes/person')

//Import Routes AUTO
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

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'), (err) => err && res.status(500).send(err));
  });

//Import Routes Example
// app.use("/api",personRoutes)

//Import Routes AUTO
readdirSync('./routes')
.map((r) => app.use("/api",require('./routes/'+r)))