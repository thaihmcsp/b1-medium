const router = require('express').Router();
const controller = require('../controllers/postController');

router.get('/getAllPosts', controller.getAllPosts)
router.get('/getPaginationPost', controller.getPaginationPost)
router.get('/viewDetails', controller.viewDetails)
router.post('/changeStatusPost', controller.changeStatusPost)
module.exports = router;