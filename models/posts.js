const mongoose = require("mongoose");
const schema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserInfo1'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments1'
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
module.exports = mongoose.model("Post1", schema);