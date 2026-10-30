const express = require("express");

const router = express.Router();

const {

    addCar,

    getCars,

    deleteCar,

    updateCar

} = require("../controllers/carController");

// Update Car
router.put("/:id", updateCar);

// Add Car
router.post("/add", addCar);

// Get All Cars
router.get("/", getCars);

// Delete Car
router.delete("/:id", deleteCar);

module.exports = router;