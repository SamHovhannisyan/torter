const express = require('express');
const router = express.Router();
const adminMiddleware = require("../middlewares/addminAuthMiddleware")
const basketController = require('../controllers/basketController')
const authMiddleWare = require('../middlewares/userAuthMiddleware')

router.post('/',authMiddleWare,basketController.create)
router.get('/',adminMiddleware,basketController.get)
router.get('/all',adminMiddleware,basketController.getAll)
router.post('/delete-admin',adminMiddleware,basketController.deleteItemForAdmin)
router.post('/delete',authMiddleWare,basketController.deleteForUser)

module.exports = router;