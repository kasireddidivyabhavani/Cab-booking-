const express = require("express");

const router = express.Router();

const {

    registerUser,

    loginUser,

    getProfile,

    getUsers,

    getUserById,

    updateUser,

    deleteUser

} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", authMiddleware, getProfile);

router.get("/", getUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);
module.exports = router;