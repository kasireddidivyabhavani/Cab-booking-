import { useEffect, useState } from "react";
import axios from "axios";
import Anav from "../../components/Anav";

function Ahome() {

    const [dashboard, setDashboard] = useState({

        totalUsers: 0,

        totalCars: 0,

        totalBookings: 0

    });

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const token = localStorage.getItem("adminToken");

                const res = await axios.get(

                    "http://localhost:8000/api/dashboard",

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                );

                setDashboard(res.data);

            }

            catch (error) {

                console.log(error);

            }

        };

        fetchDashboard();

    }, []);

    return (

        <>

            <Anav />

            <div style={{ padding: "20px" }}>

                <h2>Admin Dashboard</h2>

                <hr />

                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap"
                    }}
                >

                    <div
                        style={{
                            border: "1px solid gray",
                            padding: "20px",
                            width: "220px",
                            borderRadius: "10px"
                        }}
                    >

                        <h3>Total Users</h3>

                        <h1>{dashboard.totalUsers}</h1>

                    </div>

                    <div
                        style={{
                            border: "1px solid gray",
                            padding: "20px",
                            width: "220px",
                            borderRadius: "10px"
                        }}
                    >

                        <h3>Total Cars</h3>

                        <h1>{dashboard.totalCars}</h1>

                    </div>

                    <div
                        style={{
                            border: "1px solid gray",
                            padding: "20px",
                            width: "220px",
                            borderRadius: "10px"
                        }}
                    >

                        <h3>Total Bookings</h3>

                        <h1>{dashboard.totalBookings}</h1>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Ahome;