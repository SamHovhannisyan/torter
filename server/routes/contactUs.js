const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/contactUsController')
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

//user routes
/**
 * @swagger
 * /api/v1/users/contactUs/:
 *   post:
 *     summary: Create Contact Us.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     name:
 *                       type: string
 *                       description: The user ID.
 *                       example: gago
 *                     email:
 *                       type: string
 *                       description: The user's name.
 *                       example: gago@mail.com
 *                     message:
 *                       type: string
 *                       description: The user's name.
 *                       example: barev es gagon em
 */
router.post('/', contactUsController.create)

// admin routes
router.get('/',  adminMiddleware, contactUsController.getAll)
router.post('/delete',  adminMiddleware, contactUsController.deleteContact)
router.post('/sendAnswer', adminMiddleware, contactUsController.sendAnswer)

module.exports = router