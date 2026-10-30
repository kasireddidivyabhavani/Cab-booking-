const Car = require("../models/CarSchema");
// console.log(Car);

// Add Car

exports.addCar = async (req, res) => {

    try {

        const car = new Car(req.body);

        await car.save();

        res.status(201).json({
            message: "Car Added Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Get All Cars

exports.getCars = async (req, res) => {
    
    try {

        const cars = await Car.find();

        res.json(cars);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Delete Car

exports.deleteCar = async (req, res) => {

    try {

        await Car.findByIdAndDelete(req.params.id);

        res.json({
            message: "Car Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Car

exports.updateCar = async (req, res) => {

    try {

        const car = await Car.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        res.json({

            message: "Car Updated Successfully",

            car

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
