
const { Post } = require('../models/Post')
const { User } = require('../models/User')
const { SavePost } = require('../models/SavePost')
const { query } = require('express')

async function SavePostByPostId(req,res){
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
        let findSavePost = await SavePost.find({userId:user._id,postId})
        if(!findSavePost.length){
            await SavePost.create({userId:user._id,postId})
            res.json({mess:'success'})
        }else{
            res.json({mess:'da Luu tu trc r'})
        }
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
async function UnsavePost(req,res){
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
        await SavePost.deleteOne({userId:user._id,postId})
        res.json({mess:'unsave success'})
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
async function paginationSavePost(req,res,next){
    let {userId} = query.params
    let {page,pageSize} = req.query
    page = page ? page*1 : 1
    pageSize = pageSize ? pageSize*1 : 5
    try {
        const saveCount = await SavePost.find({userId}).count()
        const pageCount = Math.ceil(saveCount/pageSize)
        const saveList = await SavePost.find({userId}).skip((page-1)*pageSize).limit(pageSize)
        req.paginationInfo = {saveList,pageCount,pageSize}
        next()
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
module.exports = { SavePostByPostId,UnsavePost,paginationSavePost }



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
