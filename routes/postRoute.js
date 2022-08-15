const { GetPostById,GetAllFollowPost,GetUnblockPost } = require('../controllers/postController');
const router = require('express').Router();
const controller = require('../controllers/postController');

router.get('/getAllPosts', controller.getAllPosts)
router.get('/getPaginationPost', controller.getPaginationPost)
router.get('/viewDetails', controller.viewDetails)
router.post('/changeStatusPost', controller.changeStatusPost)
router.get('/get-post-by-id/:postId',GetPostById)

router.get('/get-all-follow-post',GetAllFollowPost)
router.get('/get-unblock-post',GetUnblockPost)
module.exports = router;