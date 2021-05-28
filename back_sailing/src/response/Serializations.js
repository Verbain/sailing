module.exports = function serialization(req, res){

    return res.status(res.return.code).json({
        id: req.context.id,
        response: res.return.response
    })
}