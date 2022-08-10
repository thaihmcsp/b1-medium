const { GetPostById,GetAllFollowPost,GetUnblockPost } = require('../controllers/postController');
const router = require('express').Router();

router.get('/get-post-by-id/:postId',GetPostById)

router.get('/get-all-follow-post',GetAllFollowPost)
router.get('/get-unblock-post',GetUnblockPost)
module.exports = router;