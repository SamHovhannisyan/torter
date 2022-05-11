const express = require('express');
const router = express.Router();
const deleveryController = require("../controllers/deleveryController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',deleveryController.getBasket)
router.post('/edit',adminMiddleware,deleveryController.editTextsBasket)
router.post('/editImage',adminMiddleware,deleveryController.editImageBasket)
module.exports=router

