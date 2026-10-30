import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Unav from "../../components/Unav";

function Uhome() {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        name: "",

        email: "",

        phone: ""

    });

    useEffect(() => {

        const getProfile = async () => {

            try {

                const token = localStorage.getItem("token");

                const res = await axios.get(

                    "http://localhost:8000/api/users/profile",

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                );

                setUser(res.data);

            }

            catch (error) {

                console.error(error);

                alert("Please Login Again");

                navigate("/login");

            }

        };

        getProfile();

    }, [navigate]);

    return (

        <>

            <Unav />

            <div>

                <h2>Welcome {user.name} 👋</h2>

                <hr />

                <h3>User Information</h3>

                <p><strong>Name :</strong> {user.name}</p>

                <p><strong>Email :</strong> {user.email}</p>

                <p><strong>Phone :</strong> {user.phone}</p>

                <br />

                <button

                    onClick={() => navigate("/cabs")}

                >

                    View Available Cabs

                </button>

                <br /><br />

                <button

                    onClick={() => navigate("/mybookings")}

                >

                    My Bookings

                </button>

            </div>

        </>

    );

}

export default Uhome;