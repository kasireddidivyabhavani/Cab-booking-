import { useState, useEffect } from "react";
import axios from "axios";
import Anav from "../../components/Anav";

function Bookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        const fetchBookings = async () => {

            try {

                const token = localStorage.getItem("adminToken");

                const res = await axios.get(
                    "http://localhost:8000/api/bookings",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setBookings(res.data);

            } catch (error) {

                console.error("Error Fetching Bookings :", error);

            }

        };

        fetchBookings();

    }, []);

    return (

        <>

            <Anav />

            <div>

                <h2>All Bookings</h2>

                {

                    bookings.length === 0 ?

                        <p>No Bookings Available</p>

                        :

                        bookings.map((booking) => (

                            <div
                                key={booking._id}
                                style={{
                                    border: "1px solid gray",
                                    padding: "15px",
                                    margin: "15px",
                                    borderRadius: "5px"
                                }}
                            >
                                 <h3>🚖 {booking.car?.carName}</h3>

    <p>
        <strong>User :</strong>
        {" "}
        {booking.user?.name}
    </p>

                               <p>
    <strong>Pickup :</strong>
    {" "}
    {booking.pickupLocation}
</p>

<p>
    <strong>Drop :</strong>
    {" "}
    {booking.dropLocation}
</p>

                                <p>
    <strong>Date :</strong>
    {" "}
    {
        new Date(
            booking.bookingDate
        ).toLocaleDateString()
    }
</p>

                                <p><strong>Status :</strong> {booking.status || "Booked"}</p>

                            </div>

                        ))

                }

            </div>

        </>

    );

}

export default Bookings;