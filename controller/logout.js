module.exports = function(req,res){
    req.session._id = undefined
    req.session.username = undefined
    res.redirect('/login')
}