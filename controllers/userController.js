const { User } = require("../models/User");
const { Post } = require("../models/Post");
const { Follow } = require("../models/Follow");
const { Block } = require("../models/Block");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const bcrypt = require('bcrypt');

module.exports.getProfile = async (req, res) => {
  try {
    let token = req.cookies
    console.log(token);

    let user = await User.findOne({ token: token.user })
    console.log(user);
    if (user) {
      res.render("pages/admin/profileAdmin/profileAdmin",
        { user }
      )
    } else {
      res.json('user khong toon tai')
    }
  } catch (err) {
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
    res.render("pages/admin/manageUser/manageUser", { users, listUsers, total: Math.ceil(total / 10), post });
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
  try {
    let token = req.cookies;
    // let token = jwt.verify(req.headers.authorization, 'kai') 
    let user = await User.find({ _id: token.user })
    // console.log(user);
    // console.log(token);
    // console.log(56, req.body);
    if (user) {
      fs.unlinkSync(User.avatar.slice(1))
      let user = await User.updateOne({ _id: token._id }, {
        username: req.body.username,
        description: req.body.description,
        avatar: "/" + req.file.path
      })
      console.log('Success');
      res.json({
        status: 200,
        message: 'Success',
        err: false,
      })
    } else {
      res.status(400).json({
        message: 'user not found',
      })

    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}

module.exports.changePassword = async (req, res) => {
  try {
    let token = jwt.verify(req.headers.authorization, '123')
    let user = await User.find({ _id: token._id })
    // console.log(76, req.body);
    if (user) {
      let user = await User.updateOne({ _id: token._id }, {
        password: req.body.password
      })
      res.json({
        status: 200,
        message: 'Success',
        err: false,
      })
    } else {
      console.log('change password failed');
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports.changeStatus = async (req, res) => {
  let status = ''
  try {
    // console.log(allUser)
    let user = await User.findOne({ _id: req.body.id })
    // console.log(user);
    console.log(90, user.status === 'active');
    if (user.status === 'active') {
      status = 'banned'
    } else {
      status = 'active'
    }
    if (!user) {
      res.json('user khong ton tai')
    } else {
      await User.findOneAndUpdate({ _id: req.body.id }, { status: status })
    }
    res.json({
      status: 200,
      message: 'Success'
    })

  } catch (e) {
    res.json({ message: 'Error ban user' });
  }
}


module.exports.getFindUserByNameUser = async (req, res) => {
  try {
    const listUsers = await User.find({ username: { $regex: req.params.username } })
    let users = await User.find();
    let total = users.length;
    console.log(125, listUsers.length);
    if (listUsers.length > 0) {
      console.log(127, listUsers);
      res.render('pages/admin/manageUser/manageUser', { listUsers, total: Math.ceil(total / 10) })
    } else {
      let listUsers = []
      res.render('pages/admin/manageUser/manageUser', { listUsers, total: Math.ceil(total / 10) })
    }
    // res.status(200).json({mess:'found Category'})
  } catch (e) {
    console.log(e);
    // res.status(500).json({mess:'server error'})
  }
}
module.exports.UserProfileRender = async (req, res) => {
  let user = req.user;
  try {
    const follows = await Follow.find({ userId: user._id }).populate('authorId')
    const blocks = await Block.find({ userId: user._id }).populate('authorId')
    const followers = await Follow.find({ authorId: user._id })
    res.render('./pages/user/profile/profile', { user, follows, blocks, followers, data: null })
    //res.json({user,follows,blocks,followers})
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.ChangeUserName = async (req, res) => {
  let { newName } = req.body
  let userId = req.user._id
  try {
    await User.updateOne({ _id: userId }, { username: newName })
    res.json({ mess: 'success' })
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.ChangeUserDes = async (req, res) => {
  let { newDes } = req.body
  let userId = req.user._id
  try {
    await User.updateOne({ _id: userId }, { description: newDes })
    res.json({ mess: 'success' })
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.ChangeUserAvatar = async (req, res) => {
  let userId = req.user._id
  let { path } = req.file;
  try {
    let userInfo = await User.find({ _id: userId })
    let defaultAvatarPath = 'publics/statics/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'
    if (userInfo[0].avatar != defaultAvatarPath) {
      fs.unlinkSync(userInfo[0].avatar)
    };
    await User.updateOne({ _id: userId }, { avatar: path })
    res.json({ mess: "success" })
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.ChangeUserEmail = async (req, res) => {
  let { newEmail } = req.body
  let userId = req.user._id
  try {
    let findByEmail = await User.find({ email: newEmail })
    if (findByEmail.length)
      return res.json({ mess: 'Email da ton tai' })
    await User.updateOne({ _id: userId }, { email: newEmail })
    res.json({ mess: 'success' })
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.ChangeUserPassword = async (req, res) => {
  let { oldPass, newPass } = req.body
  let userId = req.user._id
  try {
    let findUser = await User.find({ _id: userId })
    const checkPassword = await bcrypt.compare(
      oldPass,
      findUser[0].password
    );
    if (!checkPassword)
      return res.json({ mess: 'Nhap sai password' })
    const password = await bcrypt.hash(newPass, 10);
    await User.updateOne({ _id: userId }, { password })
    res.json({ mess: 'success' })
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports.getPostUser = async function (req, res) {
  try {
    let cookies = req.cookies
    let user = await User.findOne({ token: cookies.user })
    console.log(242, user)
    res.render("pages/user/yourPost/yourPost", { user })
  } catch (error) {
    console.log(error);
  }
}

module.exports.getAuthor = async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.params.id })
    let follower = await Follow.find({ authorId: user.id })
    let listUser = []
    for (let i = 0; i < follower.length; i++) {
      let user = await User.findOne({ _id: follower[i].UserID })
      listUser.push(user)
    }
    if (user) {
      res.render('pages/user/author/author', { listUser, user })
    }
  } catch (e) {
    console.log(e)
  }
}
// router.get('/your-post', async (req, res)  => {
//   try {
//       quotes = ["check"]
//       res.render("pages/user/yourPost/yourPost", {quotes})
//   } catch (error) {
//       res.status(500).json({massage: "server error", error})
//   }
// })