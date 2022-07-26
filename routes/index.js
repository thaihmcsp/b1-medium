const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('./pages/user/home/Home')
    //res.send('123456')
})

module.exports = router;