const router = require('express').Router();
const authRoute = require('../routes/authRoute');
const blockRoute = require('../routes/blockRoute');
const categoryRoute = require('../routes/categoryRoute');
const commentRoute = require('../routes/commentRoute');
const followRoute = require('../routes/followRoute');
const postRoute = require('../routes/postRoute');
const savePostRoute = require('../routes/savePostRoute');
const userRoute = require('../routes/userRoute');
const index = require('../routes/index');

router.use('/auth', authRoute);
router.use('/block', blockRoute);
router.use('/category', categoryRoute);
router.use('/comment', commentRoute);
router.use('/follow', followRoute);
router.use('/post', postRoute);
router.use('/save-post', savePostRoute);
router.use('/user', userRoute);
router.use('/', index);

module.exports = router;