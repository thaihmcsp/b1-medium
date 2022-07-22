const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('123456')
})

module.exports = router;