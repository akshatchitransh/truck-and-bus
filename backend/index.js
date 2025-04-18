import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGO_URI
).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{console.log(err)})


const app = express()

app.listen(5000, () => {
    console.log("started server")
})