const mongoose = require("mongoose");
const schema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post2'
    },
    reply: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply2'
    }],
    comment: {
        type: String
    },
    Date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserInfo2'
    }
});
module.exports = mongoose.model("Comments2", schema);