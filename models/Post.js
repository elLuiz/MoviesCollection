const mongoose = require("mongoose")
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    
    date: {
        type: Date,
        default: Date.now()
    },  
    rate: {
        type: Number,
        required: true
    }, 
    img: String
});


module.exports = mongoose.model('Movies', PostSchema)