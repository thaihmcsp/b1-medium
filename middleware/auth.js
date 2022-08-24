const {User} = require("../models/User");
const jwt = require("jsonwebtoken");

async function checkRole (req, res, next){
    try{
        if(req.user.role === 'admin'){
            next();
        }else{
            res.status(403).json({message: 'role is not allowed'})
        }
    }catch(err){
        console.log(err)
    }
}


async function checkToken(req, res, next) {
    let searchTokenUser
    try {
        let token = req.cookies.user
        searchTokenUser = await User.findOne(
            { token: token }
        )
        if (searchTokenUser) {
            let id = jwt.verify(token, 'kai')
            if (id) {
                delete searchTokenUser._doc.token
                delete searchTokenUser._doc.password
                req.user = searchTokenUser
                next()
            }
        } else {
            return res.redirect('/api/sign-in')
        }
    } catch (error) {
        if (error.message == 'jwt expired') {
            return res.json({ message: 'jwt expired' })
        } 
        if(error.message == 'jwt must be provided'){
            return res.redirect('/api/sign-in')
        }
        return res.json(error)
        
    }
}

module.exports = { checkToken, checkRole }