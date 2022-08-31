const router = require('express').Router();
const controller = require('../controllers/savePostController')
const auth = require('../middleware/auth')

router.post('/savePost', auth.checkToken, controller.savePost)
router.delete('/deletePost', auth.checkToken, controller.deletePost)
router.get('/getPost', auth.checkToken, controller.getPost)



module.exports = router;