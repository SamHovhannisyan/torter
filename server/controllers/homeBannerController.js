//constants
const HomeBanner = require("../models").HomeBanner
const cloudinary = require("../utils/cloudinary/cloudinary")

const create = async (req, res) => {
    const {titleHy, titleEn, titleRu, subTitleHy, subTitleRu, subTitleEn} = req.body

    //upload to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    const banner = await HomeBanner.create({
        titleHy,
        titleEn,
        titleRu,
        subTitleHy,
        subTitleRu,
        subTitleEn,
        image: result.secure_url,
        cloudinary_id: result.public_id,
    })
}

const get = async (req, res) => {
    try {
        const banner = await HomeBanner.findAll({
            limit: 1
        })
        return res.json(banner)
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const edit = async (req, res) => {
    try {
        const {titleHy, titleEn, titleRu, subTitleHy, subTitleRu, subTitleEn, image} = req.body

        const oldBanner = await HomeBanner.destroy({where: {id: 1}})
        const newBaner = await HomeBanner.create({
            id: 1, titleHy, titleEn, titleRu, subTitleHy, subTitleRu, subTitleEn, image
        })
        return res.json(newBaner)

    } catch (e) {
        console.log("something went wrong", e)
    }
}

const editImage = async (req, res) => {
    try {
        const {image} = req.body

        const banner = await HomeBanner.findOne({where: {id: 1}})
        // const newBaner = await HomeBanner.create({
        //     id:1, titleHy, titleEn, titleRu, subTitleHy, subTitleRu, subTitleEn, image
        // })
        banner.image = [image].toString()
        banner.save()
        return res.json(banner)

    } catch (e) {
        console.log("something went wrong", e)
    }
}


module.exports = {
    create,
    get,
    edit,
    editImage
}