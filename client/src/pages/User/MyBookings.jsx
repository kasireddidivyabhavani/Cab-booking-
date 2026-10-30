import { useState, useEffect } from "react";
import axios from "axios";
import Unav from "../../components/Unav";

function MyBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        const fetchBookings = async () => {

            try {

                const token = localStorage.getItem("token");

                const res = await axios.get(

                    "http://localhost:8000/api/bookings",

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                );

                setBookings(res.data);

            }

            catch (error) {

                console.error(error);

            }

        };

        fetchBookings();

    }, []);

    return (

        <>

            <Unav />

            <div style={{ padding: "20px" }}>

                <h2>My Bookings</h2>

                {

                    bookings.length === 0 ?

                    (

                        <h3>No Bookings Found</h3>

                    )

                    :

                    (

                        bookings.map((booking) => (

                            <div

                                key={booking._id}

                                style={{

                                    border: "1px solid #ccc",

                                    padding: "20px",

                                    marginBottom: "20px",

                                    borderRadius: "10px"

                                }}

                            >

                                <h3>

                                    🚖 {booking.car?.carName || "Cab"}

                                </h3>

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

                                <p>

                                    <strong>Status :</strong>

                                    {" "}

                                    {booking.status}

                                </p>

                            </div>

                        ))

                    )

                }

            </div>

        </>

    );

}

export default MyBookings;