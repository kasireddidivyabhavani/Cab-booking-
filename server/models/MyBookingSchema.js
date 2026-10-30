const mongoose = require("mongoose");

const MyBookingSchema = new mongoose.Schema(

    {

        user: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        car: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Car",

            required: true

        },

        pickupLocation: {

            type: String,

            required: true

        },

        dropLocation: {

            type: String,

            required: true

        },

        bookingDate: {

            type: Date,

            required: true

        },

        status: {

            type: String,

            default: "Booked"

        }

    },

    {

        timestamps: true

    }

);

const Booking = mongoose.model("Booking", MyBookingSchema);

module.exports = Booking;