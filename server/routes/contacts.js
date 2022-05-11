const express = require('express');
const router = express.Router();
const contactsController = require("../controllers/contactsController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

//user routes
router.get('/',contactsController.get)

//admin routes
router.post('/edit',adminMiddleware,contactsController.edit)

module.exports = router