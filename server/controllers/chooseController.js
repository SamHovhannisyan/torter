const Choose = require("../models").Choose

const get = async (req,res) => {
    try{
        const footer = await Choose.findAll()
        return res.json(footer)
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const create = async (req,res) => {
    try {
        const { titleHy, titleRu, titleEn, textHy, textRu, textEn} = req.body
        const newChoose = await Choose.create({
            titleHy, titleRu, titleEn, textHy, textRu, textEn, image:""
        })
        return res.json(newChoose)
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const deleteItem =async (req,res) => {
    try{
        const {id} = req.body


        const thisItem = await Choose.destroy({where:{id}})
        const footer = await Choose.findAll()
        return res.json(footer)
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const editItem = async (req,res) => {
    try{
        const {titleHy,titleRu,titleEn,textHy,textRu,textEn,id} = req.body

        const thisItem = await Choose.findOne({where:{id}})
                thisItem.titleHy = titleHy
                thisItem.titleRu = titleRu
                thisItem.titleEn = titleEn
                thisItem.textHy = textHy
                thisItem.textRu = textRu
                thisItem.textEn = textEn
                await thisItem.save()
        return res.json(thisItem)
    }catch (e) {
        console.log('something went wrong', e)
    }
}

const editImage = async (req,res) => {
    try{
        const {image} = req.body

        const item = await Choose.findOne({where:{id:1}})
        item.image = image
        await item.save()
        return res.json(item)
    }catch (e) {
        console.log('somenthing went wrong', e)
    }
}

module.exports = {
    get,
    deleteItem,
    editItem,
    create,
    editImage
}