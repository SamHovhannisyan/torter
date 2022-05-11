const Category = require('../models').Categories


const create = async (req, res) => {
    try {
        const {nameHy, nameRu, nameEn} = req.body

        const newCategory = await Category.create({
            nameHy, nameRu, nameEn
        })

        const allCategory = await Category.findAll()
        return res.json(allCategory)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const getAll = async (req, res) => {
    try{
        const allCategory = await Category.findAll()
        return res.json(allCategory)
    }catch (e) {
        console.log('something went wrong', e)
    }
}

const edit = async (req, res) => {
    try{
        const {id,nameHy, nameRu, nameEn} = req.body
        const thisCategory = await Category.destroy({where:{id}})
        const newCategory = await Category.create({
            id,nameHy, nameRu, nameEn
        })
        const allCategory = await Category.findAll()
        return res.json(allCategory)
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const deleteCategory = async (req, res) => {
    try{
        const {id} = req.body
        const thisCategory = await Category.destroy({where:{id}})
        const allCategory = await Category.findAll()
        return res.json(allCategory)
    }catch (e) {
        console.log('something went wrong', e)
    }
}

module.exports = {
    create,
    getAll,
    edit,
    deleteCategory
}