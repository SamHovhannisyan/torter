const express = require('express');
const router = express.Router();
const subscribersController = require("../controllers/subscribersController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

//user routers
/**
 * @swagger
 * /api/v1/users/subscribers/:
 *   post:
 *     summary: Create Subscriber .
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
 */
router.post('/',subscribersController.create)

//admin rouers
router.get('/',adminMiddleware,subscribersController.getAll)
router.post('/',adminMiddleware,subscribersController.sendMessage)


module.exports = router