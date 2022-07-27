const router = require('express').Router();
router.get('/sign-in', async (req, res)  => {
    try {

        quotes = ["Enter the email address addociated width your acccount, and we'll send a magic link to your inbox."]
        signIn = ["Sign In"]
        input = [""]
        link = ["< All sign options"]
        signInGG = ["Sign in with Google"]
        signInFB = ["Sign in with Facebook"]

        res.render("pages/user/signIn/signIn", {quotes, signIn, input, link, signInGG, signInFB})

    } catch (error) {
        res.status(500).json({massage: "server error", error})
    }
})



router.get('/sign-up', async (req, res)  => {
    try {

        quotes = ["Enter the email address addociated width your acccount, and we'll send a magic link to your inbox."]
        signUp = ["Sign Up"]
        input = [""]
        link = ["< All sign options"]
        signUpGG = ["Sign up with Google"]
        signUpFB = ["Sign up with Facebook"]

        res.render("pages/user/signUp/signUp", {quotes, signUp, input, link, signUpGG, signUpFB})

    } catch (error) {
        res.status(500).json({massage: "server error", error})
    }
})

module.exports = router;