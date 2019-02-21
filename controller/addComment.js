var model = require('../models/index')

module.exports = function(req,res){
    var postid = req.params.postid
    var data = model.comments({
        post : postid,
        comment : req.body.comment,
        user : req.session._id
    }
    )
    data.save(function(err,result){
        if(err)
            res.render('error',{err : err})
        else{
            console.log(result)
            model.posts.findByIdAndUpdate(postid,{$push :{
                comments : result._id
            }},function(err,result){
                if(err)
                res.render('error',{err : err})
                else{
                    res.redirect('/users/showcomments/'+postid)
                }
            })
        }
    })
}