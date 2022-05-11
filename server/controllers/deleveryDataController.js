const {TermsData: TermData} = require("../models");
const DeleveryData = require("../models").DeleveryData

const get = async (req,res) => {
    try{
        const footer = await DeleveryData.findAll()
        return res.json(footer)
    }catch (e) {
        console.log('something went wrong',e)
    }
}


const deleteItem = async (req,res) => {
    try{
        const {id} = req.body
        const thisItem = await TermData.destroy({where: {id}})
        const footer = await TermData.findAll()
        return res.json(footer)
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const create = async (req,res) => {
    try {
        const {subjectHy,subjectRu,subjectEn,answerHy,answerRu,answerEn} = req.body
        const newItem = await TermData.create({
            subjectHy,subjectRu,subjectEn,answerHy,answerRu,answerEn
        })
        const footer = await TermData.findAll()
        return res.json(footer)
    }catch (e) {
        console.log('something went wrong',e)
    }
}

module.exports = {
    get,
    deleteItem,
    create
}