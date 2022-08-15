const { Post } = require("../models/Post");

async function editPostID (req, res) {
    let postId = req.params.postId;
    let title = req.body.title;
    let content = req.body.content;
    let authorId = req.body.authorId;
    try {
        let data = await Post.findByIdAndUpdate({
            title, content, authorId
        })
    } catch (error) {
    }
}

module.exports = {editPostID}