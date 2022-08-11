const { Follow } = require('../models/Follow')
const { Block } = require('../models/Block')
const { User } = require('../models/User')

async function UserProfileRender(req,res){
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
        const follows = await Follow.find({userId:user._id}).populate('authorId')
        const blocks = await Block.find({userId:user._id}).populate('authorId')
        const followers = await Follow.find({authorId:user._id})
        res.render('./pages/user/profile/profile',{user,follows,blocks,followers,data:null})
        //res.json({user,follows,blocks,followers})
    } catch (error) {
        
    }
}
module.exports = { UserProfileRender }