const mongoose = require('mongoose');

const SavePostSchema = mongoose.Schema({
    userId: {type: String, ref: 'users', required: true},
    postId: {type: String, ref: 'posts', required: true}
}, {collection: 'saveposts', timestamps: true});

module.exports.SavePost = mongoose.model('saveposts', SavePostSchema);