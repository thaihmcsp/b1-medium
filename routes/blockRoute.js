const { BlockAuthor,UnblockAuthor,GetAllBlockAuthor } = require('../controllers/blockController');
const router = require('express').Router();

router.post('/block-author/:authorId',BlockAuthor)
router.delete('/unblock-author/:authorId',UnblockAuthor)
router.get('/get-all-block-author',GetAllBlockAuthor)
module.exports = router;