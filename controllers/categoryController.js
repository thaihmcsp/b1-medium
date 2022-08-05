const { Category } = require("../models/Category");

async function CreateCategory(req,res){
    const {categoryName} =  req.body
    try{
        const catList = await Category.find({categoryName})
        if(!catList.length){
            const data = await Category.create({categoryName})
            res.status(200).json({mess:'created Category',data})
        }else{
            res.status(300).json({mess:`Category ${categoryName} has existed`})
        }  
    }catch(error){
        res.status(500).json({mess:'server error'})
    }
}
async function GetCategoryById(req,res){
    const { catId } = req.params
    try {
        const data = await Category.findOne({_id:catId})
        res.render('/pages/admin/manageCategory/viewDatailCategory', {data})
        res.status(200).json({mess:'found Category',data})
    } catch (error) {
        res.status(500).json({mess:'server error'})
    }
}
async function UpdateCategoryById(req,res){
    const { catId, categoryName ,categoryNewName } = req.body
    try {
        const catList = await Category.find({ $and: [
            { categoryName: { $ne: categoryName } },
            { categoryName: categoryNewName }
         ]})
        if(!catList.length){
            await Category.updateOne({_id:catId},{categoryName:categoryNewName})
            const data = await Category.find({_id:catId})
            res.status(200).json({mess:'updated Category',data})
        }else{
            res.status(300).json({mess:`Category ${categoryNewName} has existed`})
        }
    } catch (error) {
        res.status(500).json({mess:'server error'})
    }
}
async function GetAllCategory(req,res){
    try {
        let catList = await Category.find().sort('categoryName')
        if(catList.length> 0){
        res.render('pages/admin/manageCategory/manageCategory', {catList})
        }else{
        let catList = []
        res.render('pages/admin/manageCategory/manageCategory', {catList})

        }
        // res.status(200).json({catList})
    } catch (error) {
        res.status(500).json({mess:'server error'})
    }
}
async function GetCategoryByName(req,res){
    const { catName } = req.params
    console.log(catName);
    try {
        const catList = await Category.find({ categoryName: { $regex: catName } })
        console.log(65, catList.length);
        if(catList.length > 0){
            console.log(66, catList);
            return res.render('pages/admin/manageCategory/manageCategory', {catList})
        }else{
            let catList = []
            res.render('pages/admin/manageCategory/manageCategory', {catList})
        }
        res.status(200).json({mess:'found Category'})
    } catch (error) {
        res.status(500).json({mess:'server error'})
    }
}
module.exports = {CreateCategory, GetCategoryById, UpdateCategoryById, GetAllCategory, GetCategoryByName}