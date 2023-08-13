const mongoose =require('mongoose')

const userDetailsSchema=new mongoose.Schema({
    user_name:{
        type: String,
        required:true
    },
    designation:{
        type:String
    },
    location:{
        type:String
    },
    salary:{
        type: Number
    },
    status:{
        type:Boolean,
        default:false
    },
}
)

module.exports = mongoose.model("Details",userDetailsSchema)