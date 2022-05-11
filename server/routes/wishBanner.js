const express = require('express');
const router = express.Router();
const termsController = require("../controllers/termsController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',termsController.getWish)
router.post('/edit',adminMiddleware,termsController.editTextsWish)
router.post('/editImage',adminMiddleware,termsController.editImageWish)

module.exports=router

