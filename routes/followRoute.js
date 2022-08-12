const { FollowAuthor,UnfollowAuthor,GetAllFollowAuthor } = require('../controllers/followController');
const router = require('express').Router();

router.post('/follow-author/:authorId',FollowAuthor)
router.delete('/unfollow-author/:authorId',UnfollowAuthor)
router.get('/get-all-follow-author',GetAllFollowAuthor)
module.exports = router;