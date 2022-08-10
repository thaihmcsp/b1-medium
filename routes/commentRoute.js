const { AddComment,RemoveComment,UpdateComment } = require('../controllers/commentController');

const router = require('express').Router();

router.post('/add-comment',AddComment)
router.delete('/remove-comment/:commentId',RemoveComment)
router.patch('/update-comment',UpdateComment)
module.exports = router;