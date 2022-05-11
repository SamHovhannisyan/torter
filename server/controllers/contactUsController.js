const ContactUs = require('../models').ContactUs
const transporter = require('../utils/nodemailer/transporter')
const create = async (req, res) => {
    try {
        const {name, email,subject, message} = req.body

        const newContact = await ContactUs.create({
            name, email,subject, message
        })
        return res.json({message: "Message are sended!"})
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const getAll = async (req, res) => {
    try {
        const offset = Number.parseInt(req.query.offset) || 0;
        const limit = Number.parseInt(req.query.limit) || 2;
        const allContacts = await ContactUs.findAll()

        const paginateContacts = await ContactUs.findAll({
            offset: offset * limit,
            limit,
        });
        return res.json({contacts: paginateContacts, count: allContacts.length});
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const sendAnswer = async (req, res) => {
    try {
        const {id, subject, message} = req.body

        const thisContact = await ContactUs.findOne({where: {id}})

        if (!thisContact) {
            return res.json({error: ["Contact not found"]})
        }
        const answer = await transporter.sendMail({
                from: process.env.NODEMAILER_USER,
                to: thisContact.email,
                subject: subject,
                text: message
            },
            function (error, info) {
                if (error) {
                    console.log("something went wrong",error);
                } else {
                    console.log("Email sent: " + info.response);
                }
            });
        return res.json({message: "Message is sended"})
    } catch (e) {
        console.log("something went wrong", e)
    }
}


const deleteContact = async (req, res) => {
    try {
        const {id} = req.body

        const thisContact = await ContactUs.destroy({where: {id}})
        return res.json({message: "Contact are deleted!"})

    } catch (e) {
        console.log("Something went wrong", e)
    }
}


module.exports = {
    create,
    getAll,
    sendAnswer,
    deleteContact
}