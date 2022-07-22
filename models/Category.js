const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    categoryName: {type: String, required: true}
}, {collection: 'categories'})

module.exports.Category = mongoose.model('categories', CategorySchema);