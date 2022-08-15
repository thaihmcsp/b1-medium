const { Post } = require('../models/Post')
const { Comment } = require('../models/Comment')
const { User } = require('../models/User')

async function AddComment(req,res){
    let { content,postId } = req.body
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
        await Comment.create({authorId:user._id,content,postId})
        res.json({mess:'success'})
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
async function RemoveComment(req,res){
    let { commentId } = req.params
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
        let isAuthor = await Comment.findOne({_id:commentId,authorId:user._id})
        if(isAuthor){
            await Comment.deleteOne({_id:commentId})
            res.json({mess:'success'})
        }else{
            res.json({mess:'this is not your comment'})
        } 
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
async function UpdateComment(req,res){
    let { cmtId,newContent } = req.body
    try {
        await Comment.findById(cmtId)
        await Comment.updateOne({_id:cmtId},{content:newContent})
        res.json({mess:'success'})
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
async function GetCommentByPostId(req,res){
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
    let { postId } = req.params
    try {
        const post = await Post.findById(postId).populate('category').populate('authorId')
        const commentList = await Comment.find({ postId }).populate('authorId').sort({createdAt:-1})
        res.render('./pages/user/viewPost/commentComponent',{commentList,user,post})
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
module.exports = { AddComment,RemoveComment,UpdateComment,GetCommentByPostId }