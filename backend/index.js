const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors({origin: "https://varuns-notebook.netlify.app/"}))

const connectDb = async()=>{
    await mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("connected to DB...")
}

app.use('/api/notes', require('./routes/notes'))
app.use('/api/auth', require('./routes/auth'))

app.listen(8000, () =>{
    console.log("Server listening at http://localhost:8000")
    connectDb()
})
