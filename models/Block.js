const mongoose = require('mongoose');

const BlockSchema = mongoose.Schema({
    userId: {type: String, ref: 'users', required: true},
    authorId: {type: String, ref: 'users', required: true}
}, {collection: 'blocks', timestamps: true});

module.exports.Block = mongoose.model('blocks', BlockSchema);