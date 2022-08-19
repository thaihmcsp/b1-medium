const { FollowAuthor,UnfollowAuthor,GetAllFollowAuthor } = require('../controllers/followController');
const { checkToken } = require('../middleware/auth');
const router = require('express').Router();

router.post('/follow-author/:authorId', checkToken, FollowAuthor)
router.delete('/unfollow-author/:authorId', checkToken, UnfollowAuthor)
router.get('/get-all-follow-author', checkToken, GetAllFollowAuthor)
module.exports = router;