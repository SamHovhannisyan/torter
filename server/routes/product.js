const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

//admin routes
router.post('/',adminMiddleware,productController.create)
router.post('/edit',adminMiddleware,productController.edit)
router.post('/delete',adminMiddleware,productController.deleteItem)
router.get('/all', productController.getAll)
router.post('/editImage',adminMiddleware,productController.editImage)
router.post('/deleteImage',adminMiddleware,productController.deleteImage)
router.post('/addImage',adminMiddleware,productController.addImage)
//user routes
router.get('/single',productController.getSingle)
router.get('/',productController.all)
module.exports = router