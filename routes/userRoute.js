const { getAuthor, UserProfileRender, ChangeUserName, ChangeUserDes, ChangeUserAvatar, ChangeUserEmail, ChangeUserPassword, getPostUser } = require('../controllers/userController');
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
        } else {
            cb(new Error('img only'));
        }
    },
})


router.patch('/change-name', checkToken, ChangeUserName)
router.patch('/change-des', checkToken, ChangeUserDes)
router.post('/change-avatar', checkToken, upload.single('user-avatar'), ChangeUserAvatar)
router.patch('/change-email', checkToken, ChangeUserEmail)
router.patch('/change-password', checkToken, ChangeUserPassword)
router.get('/me', checkToken, UserProfileRender)
router.get('/your-post', getPostUser)
router.get('/author/:id', checkToken,getAuthor)

module.exports = router;