const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    role: {
        type: String, 
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'userType'
    },
    userType:{
        type:String,  
    },
    date:{
        type:String,  
    },
}, {
    timestamps: true
})


// const User = new mongoose.model('user', postSchema)
module.exports = mongoose.models.Post || mongoose.model('post', postSchema)
