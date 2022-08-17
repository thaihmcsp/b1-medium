const { Post } = require("../models/Post")

async function getEditController(req, res) {
    let postId = req.params.idEditPost
    try {
        const post = await Post.findById(postId)
        // const commentList = await Comment.find({ postId }).populate('authorId').sort({createdAt:-1})
        res.render('pages/user/createPost/editPost',{post, postId} )
        //res.json({post,commentList,user})
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
    
}

module.exports = {
    getEditController
}