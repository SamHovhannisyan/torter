const Terms = require("../models").ProcuctBanner
const Detail = require('../models').DetailBanner
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
        item.image = image
        await item.save()
        return res.json(item)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const getDetail = async (req, res) => {
    try {
        const footer = await Detail.findAll()
        return res.json(footer)
    } catch (e) {
        console.log('something went wrong', e)
    }
}


const editTextsDetail = async (req, res) => {
    try {
        const {titleHy, titleRu, titleEn} = req.body
        const item = await Detail.findOne({where: {id: 1}})
        item.titleHy = titleHy
        item.titleRu = titleRu
        item.titleEn = titleEn
        await item.save()
        return res.json(item)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const editImageDetail = async (req, res) => {
    try {
        const {image} = req.body
        const item = await Detail.findOne({where: {id: 1}})
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
    getDetail,
    editTextsDetail,
    editImageDetail
}