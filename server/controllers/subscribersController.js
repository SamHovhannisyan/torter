const Subscribers = require('../models').Subscribers
const transporter = require('../utils/nodemailer/transporter')

const create = async (req, res) => {
    try {
        const {name, email} = req.body


        const newSubscriber = await Subscribers.create({name, email})

        return res.json(newSubscriber)
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const getAll = async (req, res) => {
    try {
        const offset = Number.parseInt(req.query.offset) || 0;
        const limit = Number.parseInt(req.query.limit) || 2;
        const allSubscribers = await Subscribers.findAll()

        const paginateSubscribers = await Subscribers.findAll({
            offset: offset * limit,
            limit,
        });
        return res.json({subscribers: paginateSubscribers, count: allSubscribers.length});
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const sendMessage = async (req, res) => {
    try {
        const {subject, message} = req.body

        const allSubscribers = await Subscribers.findAll()
        allSubscribers.forEach(i => {
            const answer = transporter.sendMail({
                from: process.env.NODEMAILER_USER,
                to: i.email,
                subject: subject,
                text: message
            });
        })

        return res.json({message: "Message is send"})
    } catch (e) {
        console.log("something went wrong", e)
    }
}


module.exports = {
    create,
    getAll,
    sendMessage
}