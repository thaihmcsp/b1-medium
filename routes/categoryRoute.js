const { viewUpdateCategory, CreateCategory, GetCategoryById, UpdateCategoryById, GetAllCategory, GetCategoryByName } = require('../controllers/categoryController');
const { checkToken, checkRole } = require('../middleware/auth')
const router = require('express').Router();



router.post('/create-cat', checkToken, checkRole, CreateCategory)
router.get('/get-cat-by-id/:catId', checkToken, checkRole, GetCategoryById)
router.get('/get-cat-by-name/:catName', checkToken, checkRole, GetCategoryByName)
router.get('/update-cat/:id', checkToken, checkRole, viewUpdateCategory)
router.patch('/update-old-cat/:id', checkToken, checkRole, UpdateCategoryById)
router.get('/get-all-cat', checkToken, checkRole, GetAllCategory)
module.exports = router;