const { GetPostById,GetAllFollowPost, GetAllUnblockPost } = require('../controllers/postController');
const router = require('express').Router();
const controller = require('../controllers/postController');

router.get('/getAllPosts', controller.getAllPosts)
router.get('/getPaginationPost', controller.getPaginationPost)
router.get('/viewDetails', controller.viewDetails)
router.post('/changeStatusPost', controller.changeStatusPost)
router.get('/get-post-by-id/:postId',GetPostById)

router.get('/get-all-follow-post',GetAllFollowPost)
router.get('/get-all-unblock-post',GetAllUnblockPost)
router.get('/createPost', (req, res) => {
    res.render('pages/user/createPost/createPost')
})
router.post('/createPost', async (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let authorId = req.body.authorId;
    try {
        let data = await Post.create({
            title, content, authorId
        })
        console.log(16, data)
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;