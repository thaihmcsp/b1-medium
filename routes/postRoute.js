const { GetUnblockPost,GetPostById, getAllPosts, getPaginationPost, changeStatusPost, viewDetails, GetAllFollowPost } = require('../controllers/postController');
const router = require('express').Router();
const controller = require('../controllers/postController');

router.get('/getAllPosts', getAllPosts)
router.get('/getPaginationPost', getPaginationPost)
router.get('/viewDetails', viewDetails)
router.post('/changeStatusPost', changeStatusPost)
router.get('/get-post-by-id/:postId',GetPostById)

router.get('/get-all-follow-post',GetAllFollowPost)
router.get('/get-unblock-post',GetUnblockPost)
module.exports = router;