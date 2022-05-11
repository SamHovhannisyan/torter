const Orders = require("../models").Order
const User = require("../models").User
const Product = require('../models').Product
const fetch = require("cross-fetch");
const create = async (req,res) => {
    try{
        const {user_id,product_id,
            firstName,
            lastName,
            email,phone,
            addres,apartament,
            state,delevery,
            notes,productDescription,
            paymentType,
            deleveryDate,deleveryTime,
            additions
        } = req.body
              // orderNumber
        const randomOrderId = Math.floor(
            Math.pow(10, 5) + Math.random() * 5 * Math.pow(10, 5)
        );
        const productsId = product_id.split(",")
        let products = []
        await productsId.forEach(id => {
            products.push(Product.findOne({where:{id}}))
        });
        let price = 0;
        await products.map(i=>Number(i.price) + Number(price))
        const totalPrice = price + Number(delevery)
        if(paymentType == 1) {
            await fetch("https://services.ameriabank.am/VPOS/api/VPOS/InitPayment", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    ClientID: process.env.AMERIA_CLIENT_ID,
                    Amount: totalPrice,
                    OrderID: randomOrderId,
                    BackURL: process.env.AMERIA_BACK_URL,
                    Username: process.env.AMERIA_USERNAME,
                    Password: process.env.AMERIA_PASSWORD,
                    Description:productDescription,
                    Currency:"051",
                }),
            })
                .then((response) => response.json())
                .then(async (data) => {
                    await Orders.create({
                        user_id: user_id,
                        product_id:product_id,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phone,
                        addres:addres,
                        apartament: apartament,
                        state: state,
                        delevery: delevery,
                        notes: notes,
                        orderNumber: randomOrderId,
                        productDescription: DataTypes.STRING,
                        deleveryDate:deleveryDate,
                        deleveryTime:deleveryTime,
                        currency:totalPrice,
                        additions:additions,
                        status:"new"
                    });

                    return res.json(data);
                })
                .catch(function (e) {
                    console.log("something went wrong",e);
                });
        }else if(paymentType == 2){

        }else{
            return res.json({error:"Payment type not choosen"})
        }

    }catch (e) {
        console.log('something went wrong',e)
    }
}

const payment = async (req,res) => {
    try{
        const { paymentID } = req.query;
        if(paymentID){
            await fetch(
                "https://services.ameriabank.am/VPOS/api/VPOS/GetPaymentDetails",
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({
                        PaymentID: paymentID,
                        Username: "",
                        Password: "",
                    }),
                }
            )
                .then((response) => response.json())
                .then(async (data) => {
                    const condidat = await Orders.findOne({ where: { orderNumber: data.OrderID } });
                    condidat.status = "true";
                    condidat.save();
                    if (data.ResponseCode == "00") {
                        return res.redirect(process.env.SUCCESS_URL);
                    } else {
                        const condidat = await Orders.findOne({ where: { orderNumber: data.OrderID } });
                        condidat.status = "false";
                        condidat.save();
                        return res.redirect(process.env.FAIL_URL);
                    }
                })
                .catch(function (response) {
                    return res.redirect(process.env.FAIL_URL);
                });
        }
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const getAll = async (req,res) => {
    try{
        const offset = Number.parseInt(req.query.offset) || 0;
        const limit = Number.parseInt(req.query.limit) || 2;
        const all = await Orders.findAll()

        const paginateOrders= await Orders({
            offset: offset * limit,
            limit,
            include: [User,Product],
        })
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const myOrders = async (req,res) => {
    try{
        const {userId} = req.query
        const offset = Number.parseInt(req.query.offset) || 0;
        const limit = Number.parseInt(req.query.limit) || 2;
        const all = await Orders.findAll({where: {userId}})
        const paginateOrders = await Orders.findAll({
            where:{userId},
            offset: offset * limit,
            limit,
            include: [Product],
        });
        return res.json({orders:paginateOrders,count:all.length})
    }catch (e) {
        console.log('something went wrong',e)
    }
}

const deleteItem = async (req,res) => {
    try{
        const {id} = req.body

        const item = await Orders.destroy({where:{id}})
        return res.json({message:"Deleted!"})
    }catch (e) {
        console.log('something went wrong',e)
    }
}
module.exports = {
    create,
    getAll,
    myOrders,
    deleteItem,
    payment
}