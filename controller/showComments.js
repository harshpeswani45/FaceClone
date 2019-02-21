var model = require('../models/index')

module.exports = function(req,res){
    var postid = req.params.postid
    model.posts.findById(postid).populate('user').exec(function(err,response){
        if(err)
        res.render('error',{err : err})
        else{
            console.log('HELLLOOOO')
            console.log(response)
            model.comments.find({post : postid}).populate('user').exec(function(err,result){
                if(err)
                res.render('error',{err : err})
                else{
                    console.log(result)
                    res.render('comments',{data1 : result , username : req.session.username , name:response.user.name,postid : postid})
                }
            })

        }
    })
    
}