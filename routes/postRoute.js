const { GetPostById, GetAllFollowPost, GetAllUnblockPost } = require('../controllers/postController');
const router = require('express').Router();
const controller = require('../controllers/postController');
const { editPostID } = require('../controllers/editController');
const { createPostController } = require('../controllers/createController');
const { getPostController } = require('../controllers/getPostController');
const { getEditController } = require('../controllers/getEditController');
const { checkToken } = require('../middleware/auth');



router.get('/getAllPosts', controller.getAllPosts)
router.get('/getPaginationPost', controller.getPaginationPost)
router.get('/viewDetails/:id', controller.viewDetails)
router.post('/changeStatusPost', controller.changeStatusPost)
router.get('/get-post-by-id/:postId',checkToken, GetPostById)

router.get('/createPost', getPostController)
router.post('/createPost', createPostController)
router.get('/editPost/:idEditPost', getEditController)
router.post('/editPost/:idPost', editPostID)
router.get('/get-post-by-id/:postId',GetPostById)
router.get('/get-all-follow-post',checkToken,GetAllFollowPost)
router.get('/get-all-unblock-post',checkToken,GetAllUnblockPost)
module.exports = router