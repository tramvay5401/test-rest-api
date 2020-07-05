const express = require('express')
const bodyParser  = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

const authRoutes = require('./routes/auth')
const lessonRoutes = require('./routes/lesson')
const studentRoutes = require('./routes/student')
const teacherRoutes = require('./routes/teacher')

app.use('/api/auth', authRoutes)
app.use('/api/lesson', lessonRoutes)
app.use('/api/student', studentRoutes)
app.use('/api/teacher', teacherRoutes)

module.exports = app