const { SavePost } = require('../models/SavePost')
const { User } = require('../models/User')
const { Post } = require('../models/Post')

module.exports.savePost = async (req, res) => {
    try {
        let userID = req.user._id
        let save = await SavePost.find({ userId: req.user._id, postId: req.body.id })
        // console.log(save);
        if (save.length) {
            let deletePost = await SavePost.findOneAndDelete({ userId: req.user._id, postId: req.body.id })
        } else {
            let savePost = await SavePost.create({
                userId: userID,
                postId: req.body.id,
            })
        }
        res.json({ status: 200 })
    } catch (err) {
        console.log(err);
    }
}

module.exports.getPost = async (req, res) => {
    try {
        let savePost = await SavePost.find({ userId: req.user._id }).populate(['userId', 'postId']);
        // console.log(savePost);
        res.render('pages/user/savePost/savePost', { savePost })
    } catch (err) {
        console.log(err)
    }
}

module.exports.deletePost = async (req, res) => {
    console.log(req.body.id);
    console.log(req.user.id)
    try {
        let Post = await SavePost.findOne({ _id: req.body.id })
        console.log(Post);
        if (Post) {
            let deletePost = await SavePost.findOneAndDelete({ _id: Post._id })
            console.log(deletePost);
        } else {
            console.log('past k ton tai');
        }
        res.json({ status: 200 })
    } catch (err) {
        console.log(err);
    }
}