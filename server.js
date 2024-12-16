const express = require("express")
const app = express()
const mongoose= require("mongoose")
app.use(express.json())
app.use("/api",require("./Routes/userRoutes"))


mongoose.connect("mongodb+srv://hedi:hedi@cluster0.6imlm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("database connected"))













const PORT=5000
app.listen(PORT,()=> console.log("my server is running on port ",PORT))