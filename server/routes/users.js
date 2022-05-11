const express = require('express');
const router = express.Router();
const usersCotroller = require("../controllers/usersController")
const adminMiddleware = require("../middlewares/addminAuthMiddleware")

//user routes


/**
 * @swagger
 * /api/v1/users/users/create:
 *   post:
 *     summary: Register.
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
 *                       example: 0
 *                     email:
 *                       type: string
 *                       description: The user's name.
 *                       example: gago@mail.com
 *                     password:
 *                       type: string
 *                       description: The user's name.
 *                       example: gago123456
 */
router.post('/create', usersCotroller.create)
/**
 * @swagger
 * /api/v1/users/users/login:
 *   post:
 *     summary: Login.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     email:
 *                       type: string
 *                       description: The user's name.
 *                       example: gago@mail.com
 *                     password:
 *                       type: string
 *                       description: The user's name.
 *                       example: gago123456
 */
router.post('/login', usersCotroller.login)
//forgot password
router.post('/forgotMail',usersCotroller.forgotMail)
router.post('/checkCode',usersCotroller.checkCode)
router.post('/newPassword',usersCotroller.newPassword)
//admin routes
router.post('/delete', adminMiddleware, usersCotroller.deleteUser)
router.get('/', adminMiddleware, usersCotroller.getAll)

module.exports = router;
