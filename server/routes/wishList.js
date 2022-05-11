const express = require('express');
const router = express.Router();
const adminMiddleware = require("../middlewares/addminAuthMiddleware");
const wishListController = require('../controllers/wishListController');


router.post('/',wishListController.create)
router.get('/',adminMiddleware,wishListController.get)

module.exports = router;