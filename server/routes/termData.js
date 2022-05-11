const express = require('express');
const router = express.Router();
const upload = require("../utils/multer/multer")
const TermDataController = require("../controllers/termDataController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',TermDataController.get)
router.post('/delete',adminMiddleware,TermDataController.deleteItem)
router.post('/',adminMiddleware,TermDataController.create)
module.exports=router

