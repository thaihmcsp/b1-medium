const { Post } = require('../models/Post')
const { Follow } = require('../models/Follow')
const { Block } = require('../models/Block')
const { User } = require('../models/User')
const jwt = require("jsonwebtoken");
const { Comment } = require('../models/Comment')

module.exports.getAllPosts = async (req, res) => {
    try {
        let posts = await Post.find().populate('authorId')
        let listPosts = await Post.find().populate('authorId')
        // console.log(listPosts[0].authorId);
        let total = posts.length
        if (posts) {
            console.log(33);
            res.render('pages/admin/managePost/managePost', { listPosts, total: total / 10 })
        } else {
            console.log('khong co posts nao');
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports.getPaginationPost = async (req, res) => {
    try {
        let listPosts = await Post.find()
            .skip(req.query.limit * (req.query.page - 1))
            .limit(req.query.limit);
        res.render('pages/admin/managePost/paginationPost', { listPosts })
    } catch (err) {
        console.log(err);
    }
}

module.exports.viewDetails = async (req, res) => {
    try {
        let post = await Post.findOne({ _id: req.params.id })
        let user = await User.findOne({ _id: post.authorId })
        // if(post){
        res.render('pages/admin/managePost/viewdetails',
            { post, user }
        )
        // }else{
        // console.log('post khoong ton tai');
        // }
    } catch (e) {
        console.log(e);
    }
}

module.exports.changeStatusPost = async (req, res) => {
    try {
        let post = await Post.findOne({ _id: req.body.id })
        if (post) {
            if (post.status === false) {
                post = await Post.findByIdAndUpdate({ _id: req.body.id }, { status: true })
            } else {
                post = await Post.findByIdAndUpdate({ _id: req.body.id }, { status: false })
            }
            res.son({
                status: 200,
            })
        } else {
            console.log('post khong ton tai');
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports.GetPostById = async function (req, res) {
    let { postId } = req.params
    let user = req.user;
    try {
        const post = await Post.findById(postId).populate('category').populate('authorId')
        const listUser = await Follow.find({authorId:post.authorId._id}).populate('userId')
        const listFollow = await Follow.find({userId:post.authorId._id}).populate('authorId')
        const author = await User.findById(post.authorId._id)
        const commentList = await Comment.find({ postId }).populate('authorId').sort({ createdAt: -1 })
        res.render('./pages/user/viewPost/viewPost', { post, commentList, user,listUser,author,listFollow })
        //res.json({listUser})
    } catch (error) {
        res.status(500).json({ mess: 'error', error })
    }
}
module.exports.GetAllFollowPost = async function (req, res) {
    // let user = {_id:"62eb6f9997380d24834631f6",
    //             email:"thp@gmail.com",
    //             username:    "Tran Huu Phuoc",
    //             password:    "thp123",
    //             status:    "active",
    //             role:    "user",
    //             description:    "thp des",
    //             avatar:    "publics/static/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
    //             createdAt:    "2022-08-04T07:04:57.829+00:00",
    //             updatedAt:    "2022-08-04T07:04:57.829+00:00",
    //         }
    let user = req.user;
    let rightNavData = req.rightNavData
    try {
        const follows = await Follow.find({ userId: user._id }, 'authorId')
        const authorList = follows.map(e => e.authorId)
        const followPosts = await Post.find({ authorId: { $in: authorList } }).populate('authorId').populate('category')
        res.render('./pages/user/home/postList', { data: followPosts,rightNavData })
        //res.json({data:followPosts})
    } catch (error) {
        res.status(500).json({ mess: 'error', error })
    }
}
module.exports.GetAllUnblockPost = async function (req, res) {
    // let user = {_id:"62eb6f9997380d24834631f6",
    //             email:"thp@gmail.com",
    //             username:    "Tran Huu Phuoc",
    //             password:    "thp123",
    //             status:    "active",
    //             role:    "user",
    //             description:    "thp des",
    //             avatar:    "publics/static/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
    //             createdAt:    "2022-08-04T07:04:57.829+00:00",
    //             updatedAt:    "2022-08-04T07:04:57.829+00:00",
    //         }
    let user = req.user;
    let rightNavData = req.rightNavData
    try {
        const blocks = await Block.find({ userId: user._id }, 'authorId')
        const authorList = blocks.map(e => e.authorId)
        const blockPosts = await Post.find({ authorId: { $nin: authorList } }).populate('authorId').populate('category')
        res.render('./pages/user/home/postList', { data: blockPosts ,rightNavData})
        //res.json({data:blockPosts})
    } catch (error) {
        res.status(500).json({ mess: 'error', error })
    }
}
module.exports.GetUnblockPostForHomeRendering = async function (req, res) {
    // let user = {_id:"62eb6f9997380d24834631f6",
    //             email:"thp@gmail.com",
    //             username:    "Tran Huu Phuoc",
    //             password:    "thp123",
    //             status:    "active",
    //             role:    "user",
    //             description:    "thp des",
    //             avatar:    "publics/static/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
    //             createdAt:    "2022-08-04T07:04:57.829+00:00",
    //             updatedAt:    "2022-08-04T07:04:57.829+00:00",
    //         }
    let user = req.user;
    let rightNavData = req.rightNavData
    try {
        const blocks = await Block.find({ userId: user._id }, 'authorId')
        const authorList = blocks.map(e => e.authorId)
        const blockPosts = await Post.find({ authorId: { $nin: authorList } }).populate('authorId').populate('category')
        res.render('./pages/user/home/Home', { data: blockPosts, user ,rightNavData})
    } catch (error) {
        res.status(500).json({ mess: 'error', error })
    }
}