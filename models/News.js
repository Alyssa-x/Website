
var mongoose = require("mongoose");
var newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        trim: true,
    },
    pubDate: {
        type: Date,
        required: true,
        default: Date.now, //默认值，此处为函数（函数返回值作为默认值）
    },
    channel: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("News", newsSchema);