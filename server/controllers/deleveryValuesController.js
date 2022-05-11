const DeleveryValues = require("../models").DeleveryValues

const get = async (req, res) => {
    try {
        const footer = await DeleveryValues.findAll()
        return res.json(footer)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const create = async (req, res) => {
    try {
        const {loacation, price} = req.body

        const newDeleveryValue = await DeleveryValues.create({
            loacation, price
        })
        const all = await DeleveryValues.findAll()
        return res.json(all)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const deleteItem = async (req, res) => {
    try {
        const {id} = req.body

        const thisItem = await DeleveryValues.destroy({where: {id}})
        const all = await DeleveryValues.findAll()
        return res.json(all)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const edditItem = async (req, res) => {
    try {
        const {id, loacation, price} = req.body

        const thisItem = await DeleveryValues.findOne({where: {id}})
        thisItem.loacation = loacation
        thisItem.price = price
        await thisItem.save()
        const all = await DeleveryValues.findAll()
        return res.json(all)

    } catch (e) {

    }
}

module.exports = {
    get,
    create,
    deleteItem,
    edditItem
}