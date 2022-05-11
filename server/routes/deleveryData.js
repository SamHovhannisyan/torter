const express = require('express');
const router = express.Router();
const upload = require("../utils/multer/multer")
const DeleveryDataController = require("../controllers/deleveryDataController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',DeleveryDataController.get)
router.post('/delete',adminMiddleware,DeleveryDataController.deleteItem)
router.post('/',adminMiddleware,DeleveryDataController.create)
module.exports=router

