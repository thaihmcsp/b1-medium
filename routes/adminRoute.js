const router = require('express').Router();
const controller = require('../controllers/userController');
const multer = require("multer");
const auth = require('../middleware/auth')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./publics/uploads");
  },
  filename: function (req, file, cb) {
    const arr = file.originalname.split(".");
    const ext = arr[arr.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + `.${ext}`);
  },
});
const upload = multer({ storage: storage });
router.get('/profile', auth.checkToken, auth.checkRole, controller.getProfile)
router.post('/changStatus', auth.checkToken, auth.checkRole, controller.changeStatus)
// lấyy user về và phân trang
router.get('/getAllUsers', auth.checkToken, auth.checkRole, controller.getAllUsers)
router.get('/findUserByName/:username', auth.checkToken, auth.checkRole, controller.getFindUserByNameUser)
router.get('/paginationUsers', auth.checkToken, auth.checkRole, controller.getPaginationUsers)
// thay đổi thông tin thì sẽ reload lại trang
router.post('/changeProfile', auth.checkToken, auth.checkRole, upload.single('avatar'), controller.changeProfile)
// đổi password thì logout yêu cầu đăng nhập lại
router.post('/changePassword', auth.checkToken, auth.checkRole, controller.changePassword)
module.exports = router;