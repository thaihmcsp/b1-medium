const { Category } = require("../models/Category");

async function getPostController(req, res) {
    const category = await Category.find({});
    res.render('pages/user/createPost/createPost', { category })
}

module.exports = {
    getPostController
}