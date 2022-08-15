const mongoose = require('mongoose');

const FollowSchema = mongoose.Schema({
    userId: {type: String, ref: 'users', required: true},
    authorId: {type: String, ref: 'users', required: true}
}, {collection: 'follows', timestamps: true});

module.exports.Follow = mongoose.model('follows', FollowSchema);