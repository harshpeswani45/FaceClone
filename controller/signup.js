var model = require('../models/index')

module.exports = function(req,res){
    var username = req.body.username
    var password = req.body.password
    model.userModel.find({name : username},function(err,result){
        if(err)
        res.render('error',{err : err})
        else{
            if(result.length !=0){
                res.render('sign',{text : 'user already exist'})
            }
            else{
                var user = new model.userModel({
                    name : username,
                    password : password
                })
                user.save(function(err,result){
                    if(err)
                    res.render('error',{err : err})
                    else{
                        model.userModel.find({},function(err,result){
                            console.log(result)
                        })
                        console.log(result)
                        res.render('sign',{text : "user succesfully registered"})
                    }
                })
            
                }
            

            }

        
    })
}