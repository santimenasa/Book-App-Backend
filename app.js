
const express = require('express')
const mongoose = require('mongoose')
const app = express()
require("dotenv").config();
const router = require('./routes/book-routes')
const colors = require('colors')
const port = 5000

const cors = require('cors')


//middlewares
app.use(express.json())
app.use(cors())
app.use("/books", router)



  




mongoose.connect(process.env.MONGO_URI)
.then( () => console.log('Connected To DB'.blue))
.then(() => app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }) )
  .catch((err) => console.log(err))



