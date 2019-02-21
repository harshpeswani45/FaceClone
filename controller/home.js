var model = require('../models/index')

module.exports = function(req,res){
    if(req.session.username){
        model.posts.find({}).populate('user').exec(function(err,result){
            if(err)
            res.render('error',{err : err})
            else{
                console.log(result)
               res.render('home',{data : result,text:'hello',username : req.session.username})
               console.log(result)        
            }
        })
        

        
        
    }
    else{
        res.render('sign',{text:"pleaselogin first"})
    }
}