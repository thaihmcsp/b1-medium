const {User} = require("../models/User");
const jwt = require("jsonwebtoken");
const fs = require("fs");
module.exports.getProfile = async (req, res) => {
  try{
    // let token = jwt.verify(req.headers.authorization, '123') 
    // let user = await User.findOne({_id: token._id})
    // if(user){
      res.render("pages/admin/profileAdmin/profileAdmin",
      //  {user}
       )
    // }else{
      // res.json('user khong toon tai')
    // }
  }catch (err) {
    res.json(err);
  }
};

module.exports.getManageUser = async (req, res) => {
  let users  = await User.find()
  console.log(users);
  res.render("pages/admin/manageUser/manageUser", {users});
};

// layas user
module.exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    let listUsers = await User.find().limit(10);
    let total = users.length;
    res.render("pages/admin/manageUser/manageUser", { users, listUsers, total: total / 10 });
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
    res.render("pages/admin/mangageUser/paginationUser", { listUser: list });
  } catch (err) {
    console.log(err);
  }
};

module.exports.changeProfile = async (req, res) => {
  try{
    let token = jwt.verify(req.headers.authorization, '123') 
    let user = await User.find({_id: token._id})
    console.log(user);
    // console.log(token);

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
    console.log(76, req.body);
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

module.exports.changeStatue = async (req, res)=>{
  let user = await User.findOne({_id: req.body.id})
  let status = ""
  if(user.status === "banned"){
    status === "active"
  }else{
    status === "banned"
  }
  if(!user){
    res.json('user khong ton tai')
  }else{
    let user = await User.findOneAndUpdate({_id: user._id}, {status: status})
  }
}