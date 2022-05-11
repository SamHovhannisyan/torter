const Terms = require("../models").Terms
const Wish = require("../models").WishBanner
const get = async (req, res) => {
    try {
        const footer = await Terms.findAll()
        return res.json(footer)
    } catch (e) {
        console.log('something went wrong', e)
    }
}


const editTexts = async (req, res) => {
    try {
        const {titleHy, titleRu, titleEn} = req.body
        const item = await Terms.findOne({where: {id: 1}})
        item.titleHy = titleHy
        item.titleRu = titleRu
        item.titleEn = titleEn
        await item.save()
        return res.json(item)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const editImage = async (req, res) => {
    try {
        const {image} = req.body
        const item = await Terms.findOne({where: {id: 1}})
        item.bannerImage = image
        await item.save()
        return res.json(item)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const getWish = async (req, res) => {
    try {
        const footer = await Wish.findAll()
        return res.json(footer)
    } catch (e) {
        console.log('something went wrong', e)
    }
}


const editTextsWish = async (req, res) => {
    try {
        const {titleHy, titleRu, titleEn} = req.body
        const item = await Wish.findOne({where: {id: 1}})
        item.titleHy = titleHy
        item.titleRu = titleRu
        item.titleEn = titleEn
        await item.save()
        return res.json(item)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const editImageWish = async (req, res) => {
    try {
        const {image} = req.body
        const item = await Wish.findOne({where: {id: 1}})
        item.image = image
        await item.save()
        return res.json(item)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

module.exports = {
    get,
    editTexts,
    editImage,
    getWish,
    editImageWish,
    editTextsWish
}