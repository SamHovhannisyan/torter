const Product = require('../models').Product
const Category = require('../models').Categories
const {Op} = require('@sequelize/core');
const create = async (req, res) => {
    try {
        const {
            nameHy,
            nameRu,
            nameEn,
            descriptionHy,
            descriptionRu,
            descriptionEn,
            price,
            image,
            category_id,
            cake_count,
            cake_price,
            cake_addition_name_hy,
            cake_addition_name_ru,
            cake_addition_name_en,
            cake_addition_price,
            long_description_hy,
            long_description_ey,
            long_description_en,
            adition_info_hy,
            adition_info_ru,
            adition_info_en,
            addition_info_value
        } = req.body


        const modelNumber = Math.floor(Math.pow(10, 9) + Math.random() * 9 * Math.pow(10, 9));
        const newProduct = await Product.create({
            nameHy,
            nameRu,
            nameEn, model: modelNumber, image, price, descriptionHy,
            descriptionRu,
            descriptionEn, category_id, cake_count, cake_price, cake_addition_name_hy,
            cake_addition_name_ru,
            cake_addition_name_en,
            cake_addition_price,
            long_description_hy,
            long_description_ey,
            long_description_en,
            adition_info_hy,
            adition_info_ru,
            adition_info_en,
            addition_info_value
        })
        return res.json(newProduct)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const all = async (req, res) => {
    try {
        const {category, min_price, max_price, search, lang} = req.query

        const offset = Number.parseInt(req.query.offset) || 0;
        const limit = Number.parseInt(req.query.limit) || 6;
        const allUsers = await Product.findAll()

        let queryObj = {}
        const filteredByCategory = []

        if (category) {
            // const cat = category.split(",")
            // const arr = await Category.findAll({where: {id: category}})
            // arr ? arr.forEach(i => filteredByCategory.push(Number(i.id))) : null


            category.map((i) => {
                queryObj["category_id"] = {
                    [Op.in]: category
                }
            })
        }

        if (min_price && max_price) {
            queryObj["price"] = {
                [Op.and]: {
                    [Op.gte]: Number(min_price),
                    [Op.lte]: Number(max_price)
                }
            }
        }
        if (min_price && !max_price) {
            queryObj["price"] = {
                [Op.gte]: Number(min_price)
            }
        }
        if (!min_price && max_price) {
            queryObj["price"] = {
                [Op.lte]: Number(max_price)
            }
        }
        if (search) {
            if (lang == "am") {
                queryObj["nameHy"] = {
                    [Op.substring]: String(search)
                }
            } else if (lang == "ru") {
                queryObj["nameHy"] = {
                    [Op.substring]: String(search)
                }
            } else if (lang == "en") {
                queryObj["nameHy"] = {
                    [Op.substring]: String(search)
                }
            } else {
                queryObj["nameHy"] = {
                    [Op.substring]: String(search)
                }
            }
        }
        const products = await Product.findAll({
            where: queryObj,
            order: [
                ['id', 'DESC'],
            ],
            includes: [Category],
            offset: offset * limit,
            limit,
        });
        return res.json({products: products, count: allUsers.length})

    } catch (e) {
        console.log('something went wrong', e)
    }
}

const getAll = async (req, res) => {
    try {
        const {search} = req.query
        const offset = Number.parseInt(req.query.offset) || 0;
        const limit = Number.parseInt(req.query.limit) || 6;
        const allProducts = await Product.findAll()
        let queryObj = {}
        if (search) {
            queryObj["nameHy"] = {
                [Op.substring]: String(search)
            }
        }
        const paginateProducts = await Product.findAll({
            where: queryObj,
            offset: offset * limit,
            limit,
            // include: [
            //     {
            //         model: Category,
            //     }
            // ],
            // attributes: ['Category'],
        });
        return res.json({products: paginateProducts, count: allProducts.length});
    } catch (e) {
        console.log("something went wrong", e)
    }
}

const getSingle = async (req, res) => {
    try {
        const {id} = req.query;
        const product = await Product.findByPk(id)
        return res.json(product)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const edit = async (req, res) => {
    try {
        const {
            id,
            nameHy,
            nameRu,
            nameEn,
            descriptionHy,
            descriptionRu,
            descriptionEn,
            price,
            image,
            category_id,
            longDescriptionHy,
            longDescriptionRu,
            longDescriptionEn,
        } = req.body
        const thisProduct = await Product.findOne({where: {id}})
        thisProduct.nameHy = nameHy
        thisProduct.nameRu = nameRu
        thisProduct.nameEn = nameEn
        thisProduct.image = image
        thisProduct.price = price
        thisProduct.category_id = category_id
        thisProduct.descriptionHy = descriptionHy
        thisProduct.descriptionRu = descriptionRu
        thisProduct.descriptionEn = descriptionEn
        thisProduct.long_description_hy = longDescriptionHy
        thisProduct.long_description_ru = longDescriptionRu
        thisProduct.descriptionEn = longDescriptionEn
        await thisProduct.save()
        return res.json(thisProduct)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const editImage = async (req, res) => {
    try {
        const {id, image, imageId} = req.body
        const item = await Product.findOne({where: {id}})
        const images = item.image.split(",")
        images[imageId] = image
        item.image = images.toString()
        await item.save()
        return res.json(item)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const deleteImage = async (req, res) => {
    try {
        const {id, index} = req.body
        const item = await Product.findOne({where: {id}})
        const itemImages = item.image.split(",")
        let newImage = itemImages.filter((i, idx) => idx !== index);
        item.image = newImage.toString()
        await item.save()
        return res.json(item)
    } catch (e) {
        console.log('somthing went wrong', e)
    }
}

const addImage = async (req, res) => {
    try {
        const {id, image} = req.body
        console.log(id, image);

        const item = await Product.findOne({where: {id}})
        const itemImages = item.image.split(",")
        itemImages.push(image)
        item.image = itemImages.toString()
        await item.save()
        console.log(itemImages);
        return res.json(item)
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const deleteItem = async (req, res) => {
    try {
        const {id} = req.body
        const isDeleted = await Product.destroy({
            where: {id}
        });

        return res.json({isDeleted})
    } catch (e) {
        console.log('something went wrong', e)
    }
}

module.exports = {
    create,
    getAll,
    all,
    getSingle,
    edit,
    deleteItem,
    editImage,
    deleteImage,
    addImage
}