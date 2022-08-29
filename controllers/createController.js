const { Post } = require("../models/Post");
const { User } = require("../models/User");

async function createPostController(req, res) {
    let title = req.body.title;
    let content = req.body.content;
    let authorId = req.body.authorId;
    let category = req.body['categoriesID[]'];
    console.log(category);
    try {
        let data = await Post.create({
            title, content, authorId, category
        })
        res.json({
            mess: 'success'
        })
        console.log(data);
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    createPostController
}