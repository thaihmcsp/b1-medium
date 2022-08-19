const router = require('express').Router();
const controller = require('../controllers/authController')

// register router
router.post('/register', controller.register)
router.get('/viewRegister', controller.viewRegister)
// login router
router.post('/login', controller.login)
router.get('/viewLogin', controller.viewLogin)
// login admin
router.get('/viewLoginAdmin', controller.viewLoginAdmin)
router.post('/loginAdmin', controller.loginAdmin)
// logout
router.post('/logout', controller.logout)
module.exports = router;