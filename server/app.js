const express = require('express')
const app = express()
// body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//cors
const cors = require('cors');
app.use(cors())

//.env
require('dotenv/config')

// Database
const db  = require('./helpers/db.js')

//routes 
const productAdd = require('./routes/products')

app.use('/api/product',productAdd)



app.listen(process.env.PORT,()=>{console.log(`Listen to ${process.env.PORT}`);})