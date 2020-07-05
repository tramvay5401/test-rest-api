const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lessonsSchema = new Schema({
    theme:{
        type: String,
        required:true
    },
    teacher:{
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    group:{
        ref: 'group',
        type: Schema.Types.ObjectId

    },
    classroom:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('lessons', lessonsSchema )