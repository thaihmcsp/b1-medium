const { GetPostById, GetAllFollowPost, GetAllUnblockPost } = require('../controllers/postController');
const router = require('express').Router();
const controller = require('../controllers/postController');
const { editPostID } = require('../controllers/editController');
const { createPostController } = require('../controllers/createController');
const { getPostController } = require('../controllers/getPostController');
const { getEditController } = require('../controllers/getEditController');
const auth = require('../middleware/auth');

router.get('/getAllPosts', controller.getAllPosts)
router.get('/getPaginationPost', controller.getPaginationPost)
router.get('/viewDetails/:id', controller.viewDetails)
router.post('/changeStatusPost', auth.checkToken, controller.changeStatusPost)
router.get('/get-post-by-id/:postId', auth.checkToken, GetPostById)

router.get('/createPost', auth.checkToken, getPostController)
router.post('/createPost', auth.checkToken, createPostController)
router.get('/editPost/:idEditPost', auth.checkToken, getEditController)
router.post('/editPost/:idPost', auth.checkToken, editPostID)
router.get('/get-post-by-id/:postId', auth.checkToken, GetPostById)
router.get('/get-all-follow-post', auth.checkToken, GetAllFollowPost)
router.get('/get-all-unblock-post', auth.checkToken, GetAllUnblockPost)
module.exports = router