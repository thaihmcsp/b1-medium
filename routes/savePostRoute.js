const { SavePostByPostId, UnsavePost, paginationSavePost } = require('../controllers/savePostController');
const router = require('express').Router();
const controller = require('../controllers/savePostController')
const auth = require('../middleware/auth');
const { rightNavData } = require('../middleware/rightNavMiddleWare');

router.post('/savePost', auth.checkToken, controller.savePost)
router.delete('/deletePost', auth.checkToken, controller.deletePost)
router.get('/getPost', auth.checkToken, rightNavData,controller.getPost)



router.post('/save-post/:postId',SavePostByPostId)
router.delete('/unsave-post/:postId',auth.checkToken,UnsavePost)
router.get('/get-all-save-post-by-id/:userId',paginationSavePost,(req,res)=>{
    let { saveList,pageCount,pageSize } = req.paginationInfo
    res.render('./trang can render',{data:saveList,pageCount,pageSize})
})
module.exports = router;