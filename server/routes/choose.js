const express = require('express');
const router = express.Router();
const upload = require("../utils/multer/multer")
const ChooseController = require("../controllers/chooseController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',ChooseController.get)
router.post('/',adminMiddleware,ChooseController.create)
router.post('/delete',adminMiddleware,ChooseController.deleteItem)
router.post('/edit',adminMiddleware,ChooseController.editItem)
router.post('/editImage',adminMiddleware,ChooseController.editImage)
module.exports=router

