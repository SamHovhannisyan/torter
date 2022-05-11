const express = require('express');
const router = express.Router();
const upload = require("../utils/multer/multer")
const productBannerController = require("../controllers/productBannerContoller")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',productBannerController.get)
router.post('/edit',adminMiddleware,productBannerController.editTexts)
router.post('/editImage',adminMiddleware,productBannerController.editImage)
module.exports=router

