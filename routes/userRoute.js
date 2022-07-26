const { UserProfileRender, ChangeUserName,ChangeUserDes,ChangeUserAvatar, ChangeUserEmail, ChangeUserPassword } = require('../controllers/userController');
const { checkToken } = require('../middleware/auth');

const router = require('express').Router();
//cau hinh multer
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './publics/statics')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + ext)
    }
})
  
const upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype.includes('image')) {
            cb(null, true);
        }else{
            cb(new Error('img only'));
        }
      },
 })

// const controller = require('../controllers/userController');

// router.get('/getProfile',controller.getProfile)
// router.get('/getAllUsers',controller.getAllUsers)
// router.get('/getPaginationUsers',controller.getPaginationUsers)
// router.post('/changeProfile', controller.changeProfile)
// router.post('/changePassword', controller.changePassword)
// router.post('changeStatus', controller.changeStatus)
// router.get('/getFindUserByNameUser', controller.getFindUserByNameUser)

router.patch('/change-name', checkToken, ChangeUserName)
router.patch('/change-des', checkToken, ChangeUserDes)
router.post('/change-avatar', checkToken,upload.single('user-avatar'), ChangeUserAvatar)
router.patch('/change-email', checkToken, ChangeUserEmail)
router.patch('/change-password', checkToken, ChangeUserPassword)
router.get('/me', checkToken, UserProfileRender)
module.exports = router;