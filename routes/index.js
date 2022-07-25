const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('pages/admin/profileAdmin/profileAdmin');
})

module.exports = router;