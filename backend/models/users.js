const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({
    user_name:{
        type: String,
        required:true
    },
    pwd:{
        type:String,
        required: true
    },
}
)

module.exports = mongoose.model("Users",userSchema)