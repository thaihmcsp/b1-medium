const { SavePostByPostId, UnsavePost, paginationSavePost } = require('../controllers/savePostController');
const router = require('express').Router();

router.post('/save-post/:postId',SavePostByPostId)
router.delete('/unsave-post/:postId',UnsavePost)
router.get('/get-all-save-post-by-id/:userId',paginationSavePost,(req,res)=>{
    let { saveList,pageCount,pageSize } = req.paginationInfo
    res.render('./trang can render',{data:saveList,pageCount,pageSize})
})
module.exports = router;