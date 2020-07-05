const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    imageSrc:{
        type:String,
        default:''
    },
    date:{
        type:Date,
        default: Date.now
    },
    student:[
        {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
    ],
})

module.exports = mongoose.model('group',groupSchema)