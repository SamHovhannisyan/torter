const Delevery = require("../models").Delevery
const Basket = require('../models').BasketBanner
const get = async (req,res) => {
    try{
        const footer = await Delevery.findAll()
        return res.json(footer)
    }catch (e) {
        console.log('something went wrong',e)
    }
}
const editTexts = async (req,res) => {
    try{
        const {titleHy,titleRu,titleEn} = req.body
        const item = await Delevery.findOne({where:{id:1}})
        item.titleHy = titleHy
        item.titleRu = titleRu
        item.titleEn = titleEn
        await item.save()
        return res.json(item)
    }catch (e) {
        console.log('something went wrong', e)
    }
}

const editImage = async (req,res) => {
    try{
        const {image} = req.body

        const item = await Delevery.findOne({where:{id:1}})
        item.bannerImage = image
        await item.save()
        return res.json(item)
    }catch (e) {
        console.log('something went wrong', e)
    }
}

const getBasket = async (req,res) => {
    try{
        const footer = await Basket.findAll()
        return res.json(footer)
    }catch (e) {
        console.log('something went wrong',e)
    }
}
const editTextsBasket = async (req,res) => {
    try{
        const {titleHy,titleRu,titleEn} = req.body
        const item = await Basket.findOne({where:{id:1}})
        item.titleHy = titleHy
        item.titleRu = titleRu
        item.titleEn = titleEn
        await item.save()
        return res.json(item)
    }catch (e) {
        console.log('something went wrong', e)
    }
}

const editImageBasket = async (req,res) => {
    try{
        const {image} = req.body

        const item = await Basket.findOne({where:{id:1}})
        item.image = image
        await item.save()
        return res.json(item)
    }catch (e) {
        console.log('something went wrong', e)
    }
}



module.exports = {
    get,
    editTexts,
    editImage,
    getBasket,
    editImageBasket,
    editTextsBasket
}
