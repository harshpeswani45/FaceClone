const mongoose = require("mongoose");
const schema = mongoose.Schema({
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments1'
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
        ref: 'UserInfo1'
    }
});
module.exports = mongoose.model("Reply1", schema);