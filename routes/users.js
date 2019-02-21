var express = require('express');
var router = express.Router();
var controller = require('../controller/index')

/* GET users listing. */
router.use(controller.authenticate)
router.get('/',controller.home );
router.post('/createPost',controller.createPost)
router.put('/like/:postid/:username/:decision',controller.likePost)
router.get('/showcomments/:postid',controller.showComments)
router.post('/addcomment/:postid',controller.addComment)
router.get('/showreplies/:commentid',controller.showReplies)
router.post('/addreply/:commentid',controller.addReply)
router.get('/deletereply/:replyid/:commentid',controller.deleteReply)
router.get('/deletecomment/:commentid/:postid',controller.deleteComment)
router.get('/deletepost/:postid',controller.deletePost)

module.exports = router;
