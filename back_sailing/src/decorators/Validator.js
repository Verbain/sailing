module.exports = function Validator(schema) {
    return function (req, res, next){
        const validate = schema.validate(req.body);
        if (validate.error){
            return  res.status(400).json({
                id: req.context.id,
                response: { error: validate.error}
            })
        }
        return next();
    }
}