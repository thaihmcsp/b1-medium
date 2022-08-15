const { BlockAuthor,UnblockAuthor,GetAllBlockAuthor } = require('../controllers/blockController');
const router = require('express').Router();

router.post('/block-author',BlockAuthor)
router.delete('/unblock-author',UnblockAuthor)
router.get('/get-all-block-author',GetAllBlockAuthor)
module.exports = router;