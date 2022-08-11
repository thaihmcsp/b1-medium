const { Post } = require('../models/Post')
const { Follow } = require('../models/Follow')
const { Block } = require('../models/Block')
const { User } = require('../models/User')
const { Comment } = require('../models/Comment')

async function GetPostById(req,res){
    let { postId } = req.params
    let user = {_id:"62eb6f9997380d24834631f6",
                email:"thp@gmail.com",
                username:    "Tran Huu Phuoc",
                password:    "thp123",
                status:    "active",
                role:    "user",
                description:    "thp des",
                avatar:    "publics/static/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
                createdAt:    "2022-08-04T07:04:57.829+00:00",
                updatedAt:    "2022-08-04T07:04:57.829+00:00",
            }
    try {
        const post = await Post.findById(postId).populate('category').populate('authorId')
        
        const commentList = await Comment.find({ postId }).populate('authorId').sort({createdAt:-1})
        res.render('./pages/user/viewPost/viewPost',{post,commentList,user})
        //res.json({post,commentList,user})
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
async function GetAllFollowPost(req,res){
    let user = {_id:"62eb6f9997380d24834631f6",
                email:"thp@gmail.com",
                username:    "Tran Huu Phuoc",
                password:    "thp123",
                status:    "active",
                role:    "user",
                description:    "thp des",
                avatar:    "publics/static/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
                createdAt:    "2022-08-04T07:04:57.829+00:00",
                updatedAt:    "2022-08-04T07:04:57.829+00:00",
            }
    try {
        const follows = await Follow.find({userId:user._id},'authorId')
        const authorList = follows.map(e=>e.authorId)
        const followPosts = await Post.find({authorId:{$in:authorList}}).populate('authorId').populate('category')
        res.render('./pages/user/home/postList',{data:followPosts})
        //res.json({data:followPosts})
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
async function GetAllUnblockPost(req,res){
    let user = {_id:"62eb6f9997380d24834631f6",
                email:"thp@gmail.com",
                username:    "Tran Huu Phuoc",
                password:    "thp123",
                status:    "active",
                role:    "user",
                description:    "thp des",
                avatar:    "publics/static/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
                createdAt:    "2022-08-04T07:04:57.829+00:00",
                updatedAt:    "2022-08-04T07:04:57.829+00:00",
            }
    try {
        const blocks = await Block.find({userId:user._id},'authorId')
        const authorList = blocks.map(e=>e.authorId)
        const blockPosts = await Post.find({authorId:{$nin:authorList}}).populate('authorId').populate('category')
        res.render('./pages/user/home/postList',{data:blockPosts})
        //res.json({data:blockPosts})
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
async function GetUnblockPostForHomeRendering(req,res){
    let user = {_id:"62eb6f9997380d24834631f6",
                email:"thp@gmail.com",
                username:    "Tran Huu Phuoc",
                password:    "thp123",
                status:    "active",
                role:    "user",
                description:    "thp des",
                avatar:    "publics/static/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
                createdAt:    "2022-08-04T07:04:57.829+00:00",
                updatedAt:    "2022-08-04T07:04:57.829+00:00",
            }
    try {
        const blocks = await Block.find({userId:user._id},'authorId')
        const authorList = blocks.map(e=>e.authorId)
        const blockPosts = await Post.find({authorId:{$nin:authorList}}).populate('authorId').populate('category')
        res.render('./pages/user/home/Home',{data:blockPosts})
        //res.json({data:blockPosts})
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
module.exports = { GetPostById,GetAllFollowPost,GetUnblockPostForHomeRendering,GetAllUnblockPost }