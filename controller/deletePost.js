var model = require('../models/index')

module.exports = function(req,res){
    var postid = req.params.postid
    model.posts.findByIdAndDelete(postid,function(err,result){
        if(err)
        res.render('error',{err : err})
        else{
            model.comments.find({post : postid},function(err,result){
                if(err)
                res.render('error',{err : err})
                else{
                    var resultClone = result.length
                    for(var i=0 ; i<result.length;i++){
                        (function(i){
                            var commentid = result[i]._id
                            model.reply.deleteMany({comment : commentid},function(err,result){
                                if(err)
                                res.render('error',{err : err})
                                else{
                                    console.log(result)
                                    model.comments.findByIdAndDelete(commentid,function(err,result){
                                        if(err)
                                        res.render('error',{err : err})
                                        else{
                                            if(i == resultClone)
                                                res.end()
                                        }
                                    })
                                }
                            })

                        })(i)
                    }
                }
            })
        }
    })

}