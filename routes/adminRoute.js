const router = require('express').Router();

router.get('/profile', (req, res) => {
    res.render('pages/admin/profileAdmin/profileAdmin');
})

router.get('/manage-user', (req, res) => {
    res.render('pages/admin/manageUser/manageUser');
})

module.exports = router;