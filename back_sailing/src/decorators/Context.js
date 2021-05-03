module.exports = function context(){
    const appID = Math.floor(Math.random()*1000);
    return function (req, res, next) {
        req.context = {
            id : Math.floor(Math.random()*1000),
            appID
        };

        res.return = {
            code: 200,
            response:''
        };
        return next();
    }
}