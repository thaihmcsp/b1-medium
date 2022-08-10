const { Block } = require('../models/Block')
const { User } = require('../models/User')
const { Follow } = require('../models/Follow')

async function FollowAuthor(req,res){
    let { authorId } = req.body
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
        let findFollow = await Follow.find({userId:user._id,authorId})
        if(!findFollow.length){
            await Follow.create({userId:user._id,authorId})
            await Block.deleteOne({userId:user._id,authorId})
            res.json({mess:'success'})
        }else{
            res.json({mess:'da follow tu trc r'})
        }
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
async function UnfollowAuthor(req,res){
    let { authorId } = req.body
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
        await Follow.deleteOne({userId:user._id,authorId})
        res.json({mess:'unfollow success'})
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
async function GetAllFollowAuthor(req,res){
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
        let followAuthors = await Follow.find({userId:user._id}).populate('authorId')
        res.json({data:followAuthors})
    } catch (error) {
        res.status(500).json({mess:'error',error})
    }
}
module.exports = {FollowAuthor,UnfollowAuthor,GetAllFollowAuthor}