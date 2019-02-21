var model = require('../models/index')

module.exports = function(req,res){
    console.log('hello')
    var replyid = req.params.replyid
    var commentid = req.params.commentid
    console.log(replyid)
    model.reply.findByIdAndDelete(replyid,function(err,result){
        console.log(err)
        if(err)
        res.render('error',{err : err})
        else{
           
            res.redirect('/users/showreplies/'+commentid)
        }

    })

}