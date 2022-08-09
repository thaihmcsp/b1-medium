const { FollowAuthor,UnfollowAuthor,GetAllFollowAuthor } = require('../controllers/followController');
const router = require('express').Router();

router.post('/follow-author',FollowAuthor)
router.delete('/unfollow-author',UnfollowAuthor)
router.get('/get-all-follow-author',GetAllFollowAuthor)
module.exports = router;