const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

//routes
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const carRoutes = require("./routes/carRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/users", userRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/cars", carRoutes);

app.use("/api/bookings", bookingRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {

    res.send("Cab Booking Backend Running");

});

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});

server.on("error", (err) => {
    console.error("Server Error:", err);
});