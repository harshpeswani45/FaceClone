var model = require('../models/index')

module.exports = function(req,res){
    var username = req.body.username
    var password = req.body.password
    model.userModel.find({name : username , password : password},function(err,result){
        if(err)
        res.render('error',{err : err})
        else{
            if(result.length == 0)
                res.render('sign',{text:"wrong username and password"})
            else{
                console.log(result[0]._id)
                req.session._id = result[0]._id
                console.log(req.session._id)
                req.session.username = username
                res.redirect('/users')
            }
        }
    })
}