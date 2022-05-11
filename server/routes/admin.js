const express = require('express');
const router = express.Router();
const adminCotroller = require("../controllers/adminController")


router.post('/create',adminCotroller.create)
router.post('/login',adminCotroller.login)
router.post('/delete',adminCotroller.deleteAdmin)

module.exports = router

