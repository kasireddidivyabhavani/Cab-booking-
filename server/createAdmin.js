const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/AdminSchema");

async function createAdmin() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const password = await bcrypt.hash("admin123", 10);

        const admin = new Admin({
            name: "Sai Mahesh",
            email: "saimaheshbotu2006@gmail.com",
            password
        });

        await admin.save();

        console.log("Admin Created Successfully");

        process.exit();

    } catch (err) {
        console.log(err);
        process.exit();
    }
}

createAdmin();