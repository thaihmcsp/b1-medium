const { BlockAuthor, UnblockAuthor, GetAllBlockAuthor } = require('../controllers/blockController');
const { checkToken, checkRole } = require('../middleware/auth');
const router = require('express').Router();

router.post('/block-author/:authorId', checkToken, checkRole, BlockAuthor)
router.delete('/unblock-author/:authorId', checkToken, checkRole, UnblockAuthor)
router.get('/get-all-block-author', checkToken, checkRole, GetAllBlockAuthor)
module.exports = router;