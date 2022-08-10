const { Post } = require('../models/Post');
const router = require('express').Router();


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