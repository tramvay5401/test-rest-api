const Lesson = require('../models/Lesson')
const errorHandler = require('../utils/errorHandler')


module.exports.getAll = async function (req, res) {
    try {
        const lessons = await Lesson.find({user:req.user.id})
        res.status(200).json(lessons)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.getById = async function (req, res) {
    try {
        const lesson = await Lesson.findById(req.params.id)
        res.status(200).json(lesson)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove =  async function (req, res) {
    try {
        await Lesson.remove({_id: req.params.id})
        res.status(200).json({
            message:"Item has been deleted"
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function (req, res) {
    try {
        const lesson = await new Lesson({
            theme:req.body.theme,
            teacher:req.user.id,
            group:req.body.group,
            classroom:req.body.classroom,
            date:req.body.date
        }).save()
        res.status(201).json(lesson)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req, res) {
    try {
        const lesson = await Lesson.findOneAndUpdate(
        {_id:req.params.id},
            {$set:req.body},
            {new:true}

        )
        res.status(200).json(lesson)
    } catch (e) {
        errorHandler(res, e)
    }
}
