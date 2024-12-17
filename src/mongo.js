const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/react-login-registor")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed")
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type : String,
        required:true
    }
})

const collection = mongoose.model("Collection1",newSchema)
module.exports = collection;