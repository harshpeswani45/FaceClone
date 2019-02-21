var model = require('../models/index')

module.exports = function(req,res){
    var commentid = req.params.commentid
    var postid = req.params.postid
    model.comments.findByIdAndDelete(commentid,function(err,result){
        if(err)
        res.render('error',{err : err})
        else{
            model.reply.deleteMany({comment : commentid},function(err,result){
                if(err)
                res.render('error',{err : err})
                else{
                    console.log(result)
                    res.redirect('/users/showcomments/'+postid)
                }
            })
        }
    })
}