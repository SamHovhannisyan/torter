const express = require('express');
const router = express.Router();
const deleveryController = require("../controllers/deleveryController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',deleveryController.get)
router.post('/edit',adminMiddleware,deleveryController.editTexts)
router.post('/editImage',adminMiddleware,deleveryController.editImage)
module.exports=router

