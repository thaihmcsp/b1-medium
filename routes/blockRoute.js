const { BlockAuthor,UnblockAuthor,GetAllBlockAuthor } = require('../controllers/blockController');
const { checkToken } = require('../middleware/auth');
const router = require('express').Router();

router.post('/block-author/:authorId', checkToken, BlockAuthor)
router.delete('/unblock-author/:authorId',checkToken, UnblockAuthor)
router.get('/get-all-block-author', checkToken, GetAllBlockAuthor)
module.exports = router;