const express = require('express');
const router = express.Router();
const categoryCotroller = require("../controllers/categoryController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")


//admin routes

router.post('/',adminMiddleware,categoryCotroller.create)
router.post('/edit',adminMiddleware,categoryCotroller.edit)
router.post('/delete',adminMiddleware,categoryCotroller.deleteCategory)
//user routes

router.get('/',categoryCotroller.getAll)

module.exports = router
