const express = require("express");

const router = express.Router();

const {

    bookCab,

    getBookings,

    updateBookingStatus

} = require("../controllers/bookingController");

// 👇 Add this line
const authMiddleware = require("../middleware/authMiddleware");

// Book Cab (Protected Route)
router.post("/book", authMiddleware, bookCab);

// Get All Bookings
router.get("/", authMiddleware, getBookings);

// Update Booking Status
router.put("/:id", authMiddleware, updateBookingStatus);

module.exports = router;