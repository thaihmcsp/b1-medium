const {Post} = require("../models/Post");
const {User} = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports.getAllPosts = async (req, res) =>{
    try{
        let posts = await  Post.find()
        let listPosts = await Post.find().limit(1)
        let total = posts.length
        let author = []
        for(let i = 0; i < listposts.length; i++){
            let user = await User.find({_id : listposts[i].authorId})
            author.push(user.username)
        }
        if(posts){
            res.render('pages/admin/managePost/managePost',{posts, listPosts, total: total/10})
        }else{
            console.log('khong co posts nao');
        }
    }catch(err){
        console.log(err);
    }
}

module.exports.getPaginationPost =async (req, res)=>{
    try{
        let  listposts = await Post.find()
      .skip(req.query.limit * (req.query.page - 1))
      .limit(req.query.limit);
    let author = []
    for(let i = 0; i < listposts.length; i++){
        let user = await User.find({_id : listposts[i].authorId})
        author.push(user.username)
    }
        res.render('pages/admin/managePost/paginationPost',{listposts, author})
    }catch(err){
        console.log(err);
    }
}

module.exports.viewDetails = async(req, res)=>{
    try{
        let post = await Post.findOne({_id : req.body.id})
        let user = await User.findOne({_id : post.authorId})
        if(post){
            res.render('pages/admin/managePost/viewdetails',{post, user})
        }else{
            console.log('post khoong ton tai');
        }
    }catch(e){
        console.log(e);
    }
}



module.exports.changeStatusPost = async (req, res)=>{
    try{
        let post = await Post.findOne({_id: req.body.id})
        if(post){
            if(post.status === false){
               post = await Post.findByIdAndUpdate({_id: req.body.id},{status: true})
            }else{
                post = await Post.findByIdAndUpdate({_id: req.body.id},{status: false})
            }
            res.son({
                status: 200,
            })
        }else{
            console.log('post khong ton tai');
        }
    }catch(err){
        console.log(err);
    }
}