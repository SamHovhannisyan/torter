const express = require('express');
const router = express.Router();
const upload = require("../utils/multer/multer")
const homeFooterController = require("../controllers/homeFooterController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',homeFooterController.get)
router.post('/edit',adminMiddleware,homeFooterController.editTexts)
router.post('/editImage',adminMiddleware,homeFooterController.editImage)
module.exports=router

