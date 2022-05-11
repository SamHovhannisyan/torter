const express = require('express');
const router = express.Router();
const DeleveryValuesController = require("../controllers/deleveryValuesController")
const upload = require("../utils/multer/multer")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

router.get('/',DeleveryValuesController.get)
router.post('/',adminMiddleware,DeleveryValuesController.create)
router.post('/delete',adminMiddleware,DeleveryValuesController.deleteItem)
router.post('/edit',adminMiddleware,DeleveryValuesController.edditItem)
module.exports=router

