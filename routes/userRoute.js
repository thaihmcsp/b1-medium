const router = require('express').Router();

router.get('/me',(req,res)=>{
    res.render('./pages/user/profile/profile')
})
module.exports = router;