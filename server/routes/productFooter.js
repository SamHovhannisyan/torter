const express = require('express');
const router = express.Router();
const upload = require("../utils/multer/multer")
const productFooterController = require("../controllers/productFooterController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',productFooterController.get)
router.post('/edit',adminMiddleware,productFooterController.editTexts)
router.post('/editImage',adminMiddleware,productFooterController.editImage)
module.exports=router

