const mongoose = require("mongoose");
const schema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserInfo2'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments2'
    }],
    imagePath: {
        type: String
    },
     Date: {
        type: Date,
        default: Date.now
    },
    like: [{
        type: String
    }]
});
module.exports = mongoose.model("Post2", schema);