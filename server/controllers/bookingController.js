const Booking = require("../models/MyBookingSchema");
console.log("Booking Model:", Booking);
console.log("Type:", typeof Booking);

// Book Cab

exports.bookCab = async (req, res) => {

    try {

        const booking = new Booking({

            user: req.user.id,

            car: req.body.car,

            pickupLocation: req.body.pickupLocation,

            dropLocation: req.body.dropLocation,

            bookingDate: req.body.bookingDate

        });

        await booking.save();

        res.status(201).json({
            message: "Cab Booked Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// Get Bookings

exports.getBookings = async (req, res) => {

    try {

        const bookings = await Booking.find()
            .populate("user")
            .populate("car");

        res.json(bookings);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
// Update Booking Status

exports.updateBookingStatus = async (req, res) => {

    try {

        const booking = await Booking.findByIdAndUpdate(

            req.params.id,

            {

                status: req.body.status

            },

            {

                new: true

            }

        );

        res.json({

            message: "Booking Status Updated",

            booking

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};