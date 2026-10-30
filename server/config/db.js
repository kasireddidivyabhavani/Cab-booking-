const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        console.log("Connecting to MongoDB...");
        console.log(process.env.MONGO_URI);

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected Successfully");
        console.log("Database Name:", mongoose.connection.name);

    } catch (error) {

        console.log("========== MONGODB ERROR ==========");
        console.log(error);
        console.log("==================================");
        process.exit(1);

    }
};

module.exports = connectDB;