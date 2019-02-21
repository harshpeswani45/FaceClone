const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post1'
    }]
});
module.exports = mongoose.model("UserInfo1", schema);