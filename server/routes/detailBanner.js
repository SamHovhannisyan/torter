const express = require('express');
const router = express.Router();
const productBannerController = require("../controllers/productBannerContoller")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',productBannerController.getDetail)
router.post('/edit',adminMiddleware,productBannerController.editTextsDetail)
router.post('/editImage',adminMiddleware,productBannerController.editImageDetail)
module.exports=router

