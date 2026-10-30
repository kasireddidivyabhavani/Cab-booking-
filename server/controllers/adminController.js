const Admin = require("../models/AdminSchema");
console.log(Admin);
console.log(typeof Admin);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Admin Login

exports.loginAdmin = async (req, res) => {

    try {

        const { email, password } = req.body;

        console.log("Received Email:", email);

        const admin = await Admin.findOne({ email });

        console.log("Admin Found:", admin);

        if (!admin) {
            return res.status(404).json({
                message: "Admin Not Found"
            });
        }

        // remaining code...

        const check = await bcrypt.compare(password, admin.password);

        if (!check) {

            return res.status(400).json({
                message: "Wrong Password"
            });

        }

        const token = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            message: "Admin Login Success",
            token
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
// Admin Register

exports.registerAdmin = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const adminExist = await Admin.findOne({ email });

        if (adminExist) {

            return res.status(400).json({

                message: "Admin already exists"

            });

        }

        const hashPassword = await bcrypt.hash(password, 10);

        const admin = new Admin({

            name,

            email,

            password: hashPassword

        });

        await admin.save();

        res.status(201).json({

            message: "Admin Registered Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};