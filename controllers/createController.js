const { Post } = require("../models/Post");
const { User } = require("../models/User");

async function createPostController(req, res) {
    let title = req.body.title;
    let content = req.body.content;
    let token = req.cookies
    let user = await User.findOne({token : token.user})
    let authorId = user._id
    // console.log(authorId);
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