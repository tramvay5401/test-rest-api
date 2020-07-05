const mongoose = require('mongoose')
const keys = require('./config/keys')


const mongo = () =>  mongoose.connect(keys.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('Mongo db connected')
    })
    .catch(error=>{
        console.log(error)
    })


module.exports = mongo