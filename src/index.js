const app = require('./app')

require('dotenv').config()

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST

app.listen(PORT, HOST, ()=>{
    console.log(`Server has been started on ${HOST} : ${PORT} `)
})