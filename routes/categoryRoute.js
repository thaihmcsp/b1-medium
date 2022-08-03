const { CreateCategory, GetCategoryById, UpdateCategoryById, GetAllCategory, GetCategoryByName} = require('../controllers/categoryController');

const router = require('express').Router();



router.post('/create-cat',CreateCategory)
router.get('/get-cat-by-id/:catId',GetCategoryById)
router.get('/get-cat-by-name/:catName',GetCategoryByName)
router.patch('/update-cat',UpdateCategoryById)
router.get('/get-all-cat',GetAllCategory)
module.exports = router;