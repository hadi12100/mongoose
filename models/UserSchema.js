const mongoose=require("mongoose")

const userSchema = mongoose.Schema({
    "Name":String,
    "Email":String,
    "PassWord":String,
    "PhoneNumber":String,
})

const User = mongoose.model("user",userSchema)
module.exports=User