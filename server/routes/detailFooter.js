const express = require('express');
const router = express.Router();
const upload = require("../utils/multer/multer")
const detailFooterController = require("../controllers/detailFooterController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',detailFooterController.get)
router.post('/edit',adminMiddleware,detailFooterController.editTexts)
router.post('/editImage',adminMiddleware,detailFooterController.editImage)
module.exports=router

