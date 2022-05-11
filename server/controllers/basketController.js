const Basket = require('../models').Basket
const Product = require('../models').Product
const User = require("../models").User
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

const getAll = async (req,res) => {
    try{
        const offset = Number.parseInt(req.query.offset) || 0;
        const limit = Number.parseInt(req.query.limit) || 2;
        const allOrders = await Basket.findAll()
        const paginateOrders = await Basket.findAll({
            offset: offset * limit,
            limit,
            include:[User,Product],
        })
        return res.json({orders: paginateOrders, count: allOrders.length})
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const deleteItemForAdmin = async (req,res) => {
    try{
        const {id} = req.body
        const thisOrder = await Basket.destroy({where:{id}})
        return res.json({message: "deleted !"})
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const deleteForUser = async (req,res) => {
    try{
        const {userId,id} = req.body
        const thisOrder = await Basket.destroy({where:{id}})
        const all = await Basket.findAll({where:{user_id:userId}})
        return res.json(all)

    }catch (e) {
        console.log('something went wrong',e)
    }
}

module.exports = {
    create,
    get,
    getAll,
    deleteItemForAdmin,
    deleteForUser
}