const {User} = require("../models/User");
const {Post} = require("../models/Post");
const {Follow} = require("../models/Follow");
const {Block} = require("../models/Block");
const jwt = require("jsonwebtoken");
const fs = require("fs");

module.exports.getProfile = async (req, res) => {
  try{
    let token = req.cookies
    console.log(token);

    let user = await User.findOne({token: token.user})
    console.log(user);
    if(user){
      res.render("pages/admin/profileAdmin/profileAdmin",
       {user}
       )
    }else{
      res.json('user khong toon tai')
    }
  }catch (err) {
    res.json(err);
  }
};



// layas user
module.exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    let listUsers = await User.find().limit(10);
    let total = users.length;
    let post = await Post.find()
    res.render("pages/admin/manageUser/manageUser", { users, listUsers,  total: Math.ceil(total / 10),post});
  } catch (e) {
    console.log(e);
  }
};

// phân trang
module.exports.getPaginationUsers = async (req, res) => {
  try {
    const list = await User.find()
      .skip(req.query.limit * (req.query.page - 1))
      .limit(req.query.limit);
    res.render("pages/admin/manageUser/paginationUser", { listUsers: list });
  } catch (err) {
    console.log(err);
  }
};

module.exports.changeProfile = async (req, res) => {
  try{
    let token = req.cookies;
    // let token = jwt.verify(req.headers.authorization, 'kai') 
    let user = await User.find({_id: token.user})
    // console.log(user);
    // console.log(token);
    // console.log(56, req.body);
    if(user){
      fs.unlinkSync(User.avatar.slice(1))
      let user = await User.updateOne({_id: token._id},{
        username: req.body.username,
        description: req.body.description,
        avatar: "/"+ req.file.path
      })
      console.log('Success');
      res.json({
        status: 200,
        message: 'Success',
        err: false,
      })
    }else{
      res.status(400).json({
        message: 'user not found',
      })
      
    }
  }catch (err) {
    console.log(err);
    res.json(err);
  }
}

module.exports.changePassword = async(req, res)=>{
  try{
    let token = jwt.verify(req.headers.authorization, '123') 
    let user = await User.find({_id: token._id})
    // console.log(76, req.body);
    if(user){
      let user = await User.updateOne({_id: token._id},{
        password: req.body.password
      })
      res.json({
        status: 200,
        message: 'Success',
        err: false,
      })
    }else{
      console.log('change password failed');
    }
  }catch (err) {
    console.log(err);
  }
}

module.exports.changeStatus = async (req, res)=>{
  let user = await User.findOne({_id: req.body.id})
  let status = ""
  if(user.status === "banned"){
    status = "active"
  }else{
    status = "banned"
  }
  if(!user){
    res.json('user khong ton tai')
  }else{
    let user = await User.findOneAndUpdate({_id: req.body.id  }, {status: status})
  }
}


module.exports.getFindUserByNameUser = async (req, res)=>{
  try{
    const listUsers = await User.find({ username: { $regex: req.params.username }})
    let users = await User.find();
    let total = users.length;
    console.log(125, listUsers.length);
    if(listUsers.length > 0){
      console.log(127, listUsers);
      res.render('pages/admin/manageUser/manageUser', {listUsers, total: Math.ceil(total / 10)})
    }else{
      let listUsers = []
      res.render('pages/admin/manageUser/manageUser', {listUsers, total: Math.ceil(total / 10)})
    }
  // res.status(200).json({mess:'found Category'})
  }catch(e){
    console.log(e);
    // res.status(500).json({mess:'server error'})
  }
}
module.exports.UserProfileRender = async (req,res) => {
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
        console.log(error);
        res.status(500).json(error)
    }
}