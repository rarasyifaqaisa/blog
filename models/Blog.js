const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    postedAt: {
        type: String,
        default: function() {
            return new Date().toString();
        },
    },
});

module.exports = mongoose.model("Blog", BlogSchema);
