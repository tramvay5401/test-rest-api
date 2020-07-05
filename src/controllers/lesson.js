module.exports.getAll = function (req,res) {
    res.status(200).json({
        getAllLesson: 'from controllers'
    })
}
module.exports.getById = function (req,res) {
    res.status(200).json({
        getLesson: 'from controllers'
    })
}

module.exports.remove = function (req,res) {
    res.status(200).json({
        getLesson: 'from controllers'
    })
}

module.exports.create = function (req, res) {
    res.status(200).json({
        createLesson: 'from controllers'
    })
}

module.exports.update = function (req,res) {
    res.status(200).json({
        editLesson: 'from controllers'
    })
}
