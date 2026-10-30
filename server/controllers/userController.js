const User = require("../models/UserSchema");
console.log("========== USER MODEL ==========");
console.log(User);
console.log("typeof User:", typeof User);
console.log("typeof User.findOne:", typeof User.findOne);
console.log("================================");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        console.log("User Data:", { name, email, password, phone });

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashPassword,
            phone
        });

        await user.save();

        res.status(201).json({
            message: "User Registered Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login Successful",
            token
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// User Profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        res.json(user);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// Get All Users (Admin)

exports.getUsers = async (req, res) => {

    try {

        const users = await User.find().select("-password");

        console.log("Users:", users);

        res.json(users);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

};

// Get Single User

exports.getUserById = async (req, res) => {

    try {

        const user = await User.findById(req.params.id).select("-password");

        if (!user) {

            return res.status(404).json({
                message: "User Not Found"
            });

        }

        res.json(user);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Update User

exports.updateUser = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new: true

            }

        );

        res.json({

            message: "User Updated Successfully",

            user

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


// Delete User

exports.deleteUser = async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);

        res.json({

            message: "User Deleted Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};