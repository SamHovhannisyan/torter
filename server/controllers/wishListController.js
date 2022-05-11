const Basket = require('../models').WishList

const create = async (req,res) => {
    try {
        const {id,quantity, product_id} = req.body
        const product = await Basket.create({quantity, product_id, user_id: id})
        return res.json(product)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const get = async (req,res) => {
    try {
        const {id} = req.query
        const basket = await Basket.findByPk( id)
        return res.json(basket)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

module.exports = {
    create,
    get
}