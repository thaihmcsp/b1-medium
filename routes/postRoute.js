const { Post } = require('../models/Post');
const router = require('express').Router();
const { GetPostById } = require('../controllers/postController');
const { editPostID } = require('../controllers/editController');
const { createPostController } = require('../controllers/createController');
const { getPostController } = require('../controllers/getPostController');
const { getEditController } = require('../controllers/getEditController');


router.get('/createPost', getPostController)
router.post('/createPost', createPostController)
router.get('/editPost/:idEditPost', getEditController)
router.put('/editPost/:idPost', editPostID)
router.get('/get-post-by-id/:postId',GetPostById)
module.exports = router;