//imports
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//constants
const Admin = require("../models").Admin



const create = async (req,res) => {
    try {
        const {name, email, password} = req.body
        if (!(email && password)) {
            return res.json("Name, password and email are required fields")
        }

        const oldAdmin= await Admin.findOne({
            where: {email},
        });

        if (oldAdmin) {
            return res.json( {error: ["User already exist"]})

        }
        let encryptedPassword = await bcrypt.hash(password, 10);

        let admin;
        try {
            admin = await Admin.create({
                name,
                email: email.toLowerCase(),
                password: encryptedPassword,
            });
            admin.save();
        } catch (e) {
            return res.json("something went wrong", e)
        }

        const token = jwt.sign({user_id: admin.id}, process.env.TOKEN_KEY, {
        });
        admin.token = token;
        admin.save();
        return res.status(200).json(admin);
    } catch (e) {
        console.log("something went wrong", e)
    }
}


const login = async (req,res) => {
    try {
        const {email, password} = req.body;

        if (!(email && password)) {
            return res.json({
                error: ["Password and email are required fields"],
            });
        }

        const admin = await Admin.findOne({
            where: {email: email.toLowerCase()},
        });

        if (admin && (await bcrypt.compare(password, admin.password))) {
            const token = jwt.sign(
                {user_id: admin.id, email},
                process.env.TOKEN_KEY
            );
            admin.token = token;
            admin.save();
            return res.status(200).json(admin);
        }

        return res.json({error: ["Invalid credentials"]});
    } catch (err) {
        return res.json({error: ["Error"]});
    }
}

const deleteAdmin = async (req,res) => {
    try{
        const {id} = req.body

        if(!id){
            return res.json({error: ["Invalid credentials"]});
        }
        const user = await Admin.destroy({where:{id}})
        return res.json({message:"Admin is deleted!"})
    }catch (e){
        console.log("Something went wrong",e)
    }
}


module.exports = {
    create,
    login,
    deleteAdmin
}

