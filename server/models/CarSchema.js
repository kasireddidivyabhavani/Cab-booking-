const mongoose = require("mongoose");


const CarSchema = new mongoose.Schema(
{
    carName: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    numberPlate: {
        type: String,
        required: true
    },

    pricePerKm: {
        type: Number,
        required: true
    },

    image: {
        type: String
    },

    available: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Car", CarSchema);