const mongoose = require("mongoose");
const schema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post1'
    },
    reply: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply1'
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
        ref: 'UserInfo1'
    }
});
module.exports = mongoose.model("Comments1", schema);