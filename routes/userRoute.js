const router = require('express').Router();
// const controller = require('../controllers/userController');

// router.get('/getProfile',controller.getProfile)
// router.get('/getAllUsers',controller.getAllUsers)
// router.get('/getPaginationUsers',controller.getPaginationUsers)
// router.post('/changeProfile', controller.changeProfile)
// router.post('/changePassword', controller.changePassword)
// router.post('changeStatus', controller.changeStatus)
// router.get('/getFindUserByNameUser', controller.getFindUserByNameUser)

router.get('/me',(req,res)=>{
    res.render('./pages/user/profile/profile')
})
module.exports = router;