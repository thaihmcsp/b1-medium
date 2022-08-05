const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    authorId: {type: String, ref: 'users', required: true},
    content: {type: String, required: true},
    postId: {type: String, ref: 'posts', required: true},
}, {timestamps: true, collection: 'comments'});

module.exports.Comment = mongoose.model('comments', CommentSchema);