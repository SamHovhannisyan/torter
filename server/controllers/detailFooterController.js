const DetailFooter = require("../models").DetailFooter

const get = async (req,res) => {
    try{
        const footer = await DetailFooter.findAll()
        return res.json(footer)
    }catch (e) {
        console.log('something went wrong',e)
    }
}
const editTexts = async (req,res) => {
    try{
        const {titleHy,titleRu,titleEn,subTitleHy,subTitleRu,subTitleEn} = req.body

        const thisFooter = await DetailFooter.findOne({where:{id:1}})
        thisFooter.titleHy = titleHy
        thisFooter.titleRu = titleRu
        thisFooter.titleEn = titleEn
        thisFooter.subTitleHy= subTitleHy
        thisFooter.subTitleRu=subTitleRu
        thisFooter.subTitleEn= subTitleEn
        await thisFooter.save()
        return res.json(thisFooter)
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const editImage = async (req,res) => {
    try{
        const {image} = req.body
        const thisFooter = await DetailFooter.findOne({where:{id:1}})
        thisFooter.image = image
        await thisFooter.save()
        return res.json(thisFooter)
    }catch (e) {
        console.log('something went erong',e)
    }
}


module.exports = {
    get,
    editImage,
    editTexts
}