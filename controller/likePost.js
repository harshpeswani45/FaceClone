var model = require('../models/index')

module.exports = function(req,res){
    var postid = req.params.postid
    var username = req.params.username
    var decision = req.params.decision
    if(decision == 'like'){
        model.posts.findByIdAndUpdate(postid,{ $push :{
            like : username
        }},function(err,result){
            res.end()
        })
    }
    else{
        model.posts.findByIdAndUpdate(postid,{ $pull :{
            like : username
        }},function(err,result){
            res.end()
        })
       
    }
}