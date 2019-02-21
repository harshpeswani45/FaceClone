var path = require('path')
var randomstring = require('randomstring')
var model = require('../models/index')

module.exports = function(req,res){
    var imgname
    var image = req.files.image
    if(image == undefined){
        model.posts.find({},function(err,result){
            if(err)
                res.render('error',{err :err})
            else{
                res.render('home',{text : 'please enter valid image',data:result,username : req.session.username})        
            }
    })
        
    }
    else{
        if ((path.extname(image.name).toLowerCase() != ".png") && (path.extname(image.name).toLowerCase() != ".jpg")){
            model.posts.find({},function(err,result){
                if(err)
                    res.render('error',{err :err})
                else{
                    res.render('home',{text : 'please enter valid image',data:result,username : req.session.username})        
                }        
            })
            }
        else{
        
            var random = randomstring.generate()
            console.log(image+"sadlkasbhfkhasklfjbnasklfnaskjlfnsdkjfn")
            if(image == undefined){
                res.render('error',{err : 'please enter valid image'})
            }
            else{
                 imgname = random + image.name
                image.mv('./uploads/'+imgname)
    
          }
          console.log(req.session._id)
          var data = new model.posts({
              imagePath : imgname,
              user : req.session._id
            })
           
            data.save(function(err,result){
                if(err)
                res.render('error',{err : err})
                else{
                    console.log(result)
                    model.userModel.findByIdAndUpdate(req.session._id,{ $push :{posts: result._id}},function(err,result){
                        if(err)
                        res.render('error',{err : err})
                        else{
                            res.redirect('/users')
                        }
                    })
                }
            })
        }
    }
    
}