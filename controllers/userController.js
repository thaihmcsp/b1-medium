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



// layas user
module.exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    let listUsers = await User.find().limit(10);
    let total = users.length;
    res.render("pages/admin/manageUser/manageUser", { users, listUsers,  total: Math.ceil(total / 10),});
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
    let token = jwt.verify(req.headers.authorization, '123') 
    let user = await User.find({_id: token._id})
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