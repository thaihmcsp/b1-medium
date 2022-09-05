const { AddComment, RemoveComment, UpdateComment, GetCommentByPostId } = require('../controllers/commentController');
const { checkToken } = require('../middleware/auth');

const router = require('express').Router();

router.post('/add-comment', checkToken, AddComment)
router.delete('/remove-comment/:commentId', checkToken, RemoveComment)
router.patch('/update-comment', checkToken, UpdateComment)
router.get('/get-cmt-by-post-id/:postId', checkToken, GetCommentByPostId)
module.exports = router;