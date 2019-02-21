var model = require('../models/index')

module.exports = function(req,res){
    var commentid = req.params.commentid
    var data = model.reply({
        comment : commentid,
        reply : req.body.reply,
        user : req.session._id
    })
    data.save(function(err,result){
        if(err)
        res.render('error',{err : err})
        else{
            res.redirect('/users/showreplies/'+commentid)
        }
    })

}