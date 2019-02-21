var signup = require('./signup')
var login = require('./login')
var home = require('./home')
var createPost = require('./createPost')
var likePost = require('./likePost')
var showComments = require('./showComments')
var addComment = require('./addComment')
var showReplies = require('./showReplies')
var addReply = require('./addReply')
var deleteReply = require('./deleteReply')
var  deleteComment = require('./deleteComment')
var deletePost = require('./deletePost')
var falseURL = require('./false')
var authenticate = require('./authenticate')
var sign = require('./sign')
var signupsign = require('./signupsign')
var login1 = require('./login1')
var logout = require('./logout')

module.exports = {
    signup : signup,
    login : login,
    home : home,
    createPost : createPost,
    likePost : likePost,
    showComments : showComments,
    addComment : addComment,
    showReplies : showReplies,
    addReply : addReply,
    deleteReply : deleteReply,
    deleteComment : deleteComment,
    deletePost : deletePost,
    false : falseURL,
    authenticate : authenticate,
    sign : sign,
    signupsign : signupsign,
    login1 : login1,
    logout : logout
}