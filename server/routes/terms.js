const express = require('express');
const router = express.Router();
const upload = require("../utils/multer/multer")
const termsController = require("../controllers/termsController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',termsController.get)
router.post('/edit',adminMiddleware,termsController.editTexts)
router.post('/editImage',adminMiddleware,termsController.editImage)
module.exports=router

