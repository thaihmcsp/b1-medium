const { Block } = require('../models/Block')
const { User } = require('../models/User')
const { Follow } = require('../models/Follow')

async function BlockAuthor(req, res) {
    let { authorId } = req.params
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
    try {
        let findBlock = await Block.find({ userId: user._id, authorId })
        if (!findBlock.length) {
            await Block.create({ userId: user._id, authorId })
            await Follow.deleteOne({ userId: user._id, authorId })
            res.json({ mess: 'success' })
        } else {
            res.json({ mess: 'da block tu trc r' })
        }
    } catch (error) {
        res.status(500).json({ mess: 'error', error })
    }
}
async function UnblockAuthor(req, res) {
    let { authorId } = req.params
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
    try {
        await Block.deleteOne({ userId: user._id, authorId })
        res.json({ mess: 'unblock success' })
    } catch (error) {
        res.status(500).json({ mess: 'error', error })
    }
}
async function GetAllBlockAuthor(req, res) {
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
    try {
        let blockAuthors = await Block.find({ userId: user._id }).populate('authorId')
        res.render('./pages/user/profile/followAndBlockDetail', { data: blockAuthors, type: 'block' })
    } catch (error) {
        res.status(500).json({ mess: 'error', error })
    }
}
module.exports = { BlockAuthor, UnblockAuthor, GetAllBlockAuthor }