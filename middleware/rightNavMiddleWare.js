const { Post } = require('../models/Post')
const { Category } = require('../models/Category')
const { User } = require('../models/User')
const { Follow } = require('../models/Follow')
async function rightNavData(req,res,next){
    let user = req.user
    let id = user.id
    try {
        //get 5 newest blog
        let blogs = await Post.find({authorId:{ $ne: user._id }}).limit(5).sort({'createAt':-1}).populate('authorId')
        //5 author post blog the most
        let followed = await Follow.find({userId:user._id},'authorId')
        let followedAuthors = followed.map(f=>f.authorId)
        let authors = await Post.aggregate([
            {
              $group: {
                 _id: '$authorId',
                 count: { $count: { } }
              }
            },
            {
                $match: { 
                    $and:[
                        {"_id": { $ne: user.id }},
                        {"_id": { $nin: followedAuthors }}
                    ]
                 }
            },
            {
                $sort : { count: -1 }
            }
          ]).limit(5)
        await User.populate(authors, {path: "_id"});
        //get 10 category
        let categories = await Category.find().limit(10).sort({'categoryName':1})
        req.rightNavData = { blogs,authors,categories}
        //res.render('./components/rightNav/rightNavHome',{rightNavDatadata:{blogs,authors,categories}})
        next()
    } catch (error) {
        res.status(500).json({ mess: 'error', error })
    }
}
module.exports = { rightNavData }