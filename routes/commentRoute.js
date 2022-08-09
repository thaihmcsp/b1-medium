const { AddComment,RemoveComment,UpdateComment,GetCommentByPostId } = require('../controllers/commentController');

const router = require('express').Router();

router.post('/add-comment',AddComment)
router.delete('/remove-comment/:commentId',RemoveComment)
router.patch('/update-comment',UpdateComment)
router.get('/get-cmt-by-post-id/:postId',GetCommentByPostId)
module.exports = router;