const { UserProfileRender } = require('../controllers/userController');

const router = require('express').Router();

router.get('/me',UserProfileRender)
module.exports = router;