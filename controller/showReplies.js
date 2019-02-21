var model = require('../models/index')

module.exports = function(req,res){
    
    var commentid = req.params.commentid
    
    model.comments.findById(commentid).populate('user').exec(function(err,response){
        if(err)
        res.render('error',{err : err})
        else{
            console.log(response)
            model.reply.find({comment : commentid}).populate('user').exec(function(err,result){
                if(err)
                res.render('error',{err : err})
                else{
                    
                    res.render('replies',{data2 : result , username : req.session.username , name : response.user.name , commentid : commentid })
                }
            })
        }
    })
    
}