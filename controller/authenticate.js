module.exports = function(req,res,next){
    if(req.session.username == undefined)
        res.redirect('/login')
    else
        next()
}