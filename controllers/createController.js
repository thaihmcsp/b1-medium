const { Post } = require("../models/Post");

async function createPostController(req, res) {
    let title = req.body.title;
    let content = req.body.content;
    let authorId = req.body.authorId;
    try {
        let data = await Post.create({
            title, content, authorId
        })
        res.json({
            mess: 'success'
        })
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    createPostController
}