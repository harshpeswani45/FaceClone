const mongoose = require("mongoose");
const schema = mongoose.Schema({
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments2'
    },
    reply: {
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
module.exports = mongoose.model("Reply2", schema);