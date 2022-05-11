const express = require('express');
const router = express.Router();
const upload = require("../utils/multer/multer")
const aboutFooterController = require("../controllers/aboutFooterController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',aboutFooterController.get)
router.post('/edit',adminMiddleware,aboutFooterController.editTexts)
router.post('/editImage',adminMiddleware,aboutFooterController.editImage)
module.exports=router

