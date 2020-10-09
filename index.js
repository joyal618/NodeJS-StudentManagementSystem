const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

const port = 8080

const userRouter = require("./Routers/userRouter")
const taskRouter = require("./Routers/taskRouter")

mongoose.connect(process.env.DB_URI,{useNewUrlParser: true,useUnifiedTopology: true},()=>{
    console.log("DB connected")
})

app.use(express.json())

app.get("/",(req,res,next) =>{
    res.send("Welcome to Home!!")
}) 

app.use("/user",userRouter)
app.use("/task",taskRouter)

app.listen(port,()=>{
    console.log(`App listening on Port ${port}`)
})

