const express = require('express');
const router = express.Router();
const aboutUsControllerInfo = require('../controllers/aboutUsInfoController')
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

//user routers
router.get('/', aboutUsControllerInfo.get)

// admin routes
router.post('/', adminMiddleware, aboutUsControllerInfo.create)
router.post('/edit', adminMiddleware, aboutUsControllerInfo.edit)

module.exports = router