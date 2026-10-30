import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Unav from "../../components/Unav";

function BookCab() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [booking, setBooking] = useState({

        pickupLocation: "",

        dropLocation: "",

        bookingDate: ""

    });

    const handleChange = (e) => {

        setBooking({

            ...booking,

            [e.target.name]: e.target.value

        });

    };

    const bookCab = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.post(

                "http://localhost:8000/api/bookings/book",

                {

                    car: id,

                    pickupLocation: booking.pickupLocation,

                    dropLocation: booking.dropLocation,

                    bookingDate: booking.bookingDate

                },

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );

            alert("Cab Booked Successfully");

            navigate("/mybookings");

        }

        catch (error) {

            console.error(error);

            alert(

                error.response?.data?.message ||

                "Booking Failed"

            );

        }

    };

    return (

        <>

            <Unav />

            <div>

                <h2>Book Cab</h2>

                <form onSubmit={bookCab}>

                    <input

                        type="text"

                        name="pickupLocation"

                        placeholder="Pickup Location"

                        value={booking.pickupLocation}

                        onChange={handleChange}

                        required

                    />

                    <br /><br />

                    <input

                        type="text"

                        name="dropLocation"

                        placeholder="Drop Location"

                        value={booking.dropLocation}

                        onChange={handleChange}

                        required

                    />

                    <br /><br />

                    <input

                        type="date"

                        name="bookingDate"

                        value={booking.bookingDate}

                        onChange={handleChange}

                        required

                    />

                    <br /><br />

                    <button type="submit">

                        Confirm Booking

                    </button>

                </form>

            </div>

        </>

    );

}

export default BookCab;