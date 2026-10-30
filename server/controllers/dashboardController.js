const User = require("../models/UserSchema");
const Car = require("../models/CarSchema");
const Booking = require("../models/MyBookingSchema");

exports.getDashboard = async (req, res) => {
    try {

        const totalUsers = await User.countDocuments();

        const totalCars = await Car.countDocuments();

        const totalBookings = await Booking.countDocuments();

        res.json({
            totalUsers,
            totalCars,
            totalBookings
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};