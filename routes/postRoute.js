const { GetPostById,GetAllFollowPost, GetAllUnblockPost } = require('../controllers/postController');
const router = require('express').Router();

router.get('/get-post-by-id/:postId',GetPostById)

router.get('/get-all-follow-post',GetAllFollowPost)
router.get('/get-all-unblock-post',GetAllUnblockPost)
module.exports = router;