module.exports = function(req,res,next){
    if(req.params.id != 'users')
        res.redirect('/login')
    else
        next()
}