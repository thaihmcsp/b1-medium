const { Post } = require("../models/Post");

async function editPostID(req, res) {
    let postId = req.params.idPost;
    let title = req.body.title;
    let content = req.body.content;
    let authorId = req.body.authorId;
    try {
        let data = await Post.findByIdAndUpdate(postId, {
            title, content, authorId
        })
        res.json({
            mess: 'success',
            data: {
                title, content, authorId
            }
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { editPostID }