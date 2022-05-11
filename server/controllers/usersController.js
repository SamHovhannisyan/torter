//imports
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {Op} = require('@sequelize/core');
//constants
const User = require("../models").User
const Basket = require('../models').Basket
const WishList = require('../models').WishList
const Forgot = require('../models').ForgotPassword
const ganerteCode = require('../utils/config/config').generateString
const nodemailer = require("nodemailer");
const create = async (req, res) => {
    try {
        const {name, email, password} = req.body
        if (!(email && password)) {
            return res.json("Name, password and email are required fields")
        }

        const oldUser = await User.findOne({
            where: {email},
        });

        if (oldUser) {
            return res.status(404).json({error: ["User already exist"]})
        }
        let encryptedPassword = await bcrypt.hash(password, 10);


        let user;
        try {
            user = await User.create({
                name,
                email: email.toLowerCase(),
                password: encryptedPassword,
            });
           await user.save();
        } catch (e) {
            return res.json("something went wrong", {e})
        }

        const token = jwt.sign({user_id: user.id}, process.env.TOKEN_KEY, {});
        user.token = token;
        await user.save();
        return res.send(user);
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(email,"email",password,"password");
        if (!(email && password)) {
            return res.json({
                error: ["Password and email are required fields"],
            });
        }    

        const user = await User.findOne({
            where: {email: email.toLowerCase()},
        });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                {user_id: user.id, email},
                process.env.TOKEN_KEY
            );
            user.token = token;
            user.save();
            return res.status(200).send(user);
        }

        return res.json({error: ["Invalid credentials"]});
    } catch (err) {
        console.log('something went wrong',err)
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.body
        const offset = 0;
        const limit = 5;
        if (!id) {
            return res.json({error: ["Invalid credentials"]});
        }

        const user = await User.destroy({where: {id}})
        const allUsers = await User.findAll({
            offset: offset * limit,
            limit,
        })
        return res.json(allUsers)
    } catch (e) {
        console.log("Something went wrong", e)
    }
}

const getAll = async (req, res) => {
    try {
        const {search} = req.query
        const offset = Number.parseInt(req.query.offset) || 0;
        const limit = Number.parseInt(req.query.limit) || 2;
        const allUsers = await User.findAll()
        let queryObj = {}

        if (search) {
            queryObj["name"] = {
                [Op.substring]: String(search)
            }
        }
        const paginateUsers = await User.findAll({
            where: queryObj,
            offset: offset * limit,
            limit,
            include: [Basket, WishList],
        });
        return res.json({users: paginateUsers, count: allUsers.length});
    } catch (e) {
        console.log("Something went wrong", e)
    }
}

const forgotMail = async (req, res) => {
    try {
        const {email} = req.body

        const condidat = await User.findOne({where: {email}})
        if (!condidat) {
            return res.json({message: 'user not found', answer: false})
        } else {
            const code = ganerteCode(8)
            console.log(code,"............................")
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.NODEMAILER_USER,
                    pass: process.env.NODEMAILER_PASSWORD,
                },
            })
           await transporter.sendMail({
                    from: process.env.NODEMAILER_USER,
                    to: email,
                    subject: "Forgot Password",
                    text: `Your code ${code}`
                },
                async function (error, info) {
                    if (error) {
                        console.log("something went wrong", error);
                    } else {
                        console.log("Email sent: " + info.response);
                        await Forgot.create({user: email, code})
                        return res.json({message: "verify code sended", answer: true})
                    }
                });
        }
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const checkCode = async (req, res) => {
    try {
        const {email, code} = req.body

        const condidat = await Forgot.findOne({
            where: {
                user: email,
                code: code
            }
        })
        if(!condidat){
            return res.json({message:"code not much",answer:false})
        }else {
            await Forgot.destroy({where:{user: email}})
            return res.json({message:"new password",answer:true})
        }
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const newPassword = async (req,res) => {
    try{
        const {email,password} = req.body

        const user = await User.findOne({where: {email}})
        if(!user){
            await Forgot.destroy({where:{user: email}})
            return res.json({message:"user not found",answer:false})
        }else {
            let encryptedPassword = await bcrypt.hash(password, 10);
            user.password = encryptedPassword
            await user.save()
            return res.json({message:'password chaged',answer:true})
        }
    }catch (e) {
        console.log('something went wrong',e)
    }
}

module.exports = {
    create,
    login,
    deleteUser,
    getAll,
    forgotMail,
    checkCode,
    newPassword
}