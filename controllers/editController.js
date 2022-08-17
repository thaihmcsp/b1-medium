const { Post } = require("../models/Post");

async function editPostID(req, res) {
    console.log(4);
    let postId = req.params.postId;
    let title = req.body.title;
    let content = req.body.content;
    let authorId = req.body.authorId;
    try {
        console.log(postId);
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