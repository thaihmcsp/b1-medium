const { GetPostById } = require('../controllers/postController');
const router = require('express').Router();

router.get('/get-post-by-id/:postId',GetPostById)
module.exports = router;