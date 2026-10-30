import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        name: "",

        email: "",

        phone: "",

        password: ""

    });

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const registerUser = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(

                "http://localhost:8000/api/users/register",

                user

            );

            alert(res.data.message);

            navigate("/login");

        }

        catch (error) {

            console.log(error);

    console.log(error.response);

    console.log(error.response?.data);

    alert(
        error.response?.data?.message ||
        "Registration Failed"
    );

        }

    };

    return (

        <div>

            <h2>User Register</h2>

            <form onSubmit={registerUser}>

                <input

                    type="text"

                    name="name"

                    placeholder="Enter Name"

                    value={user.name}

                    onChange={handleChange}

                    required

                />

                <br /><br />

                <input

                    type="email"

                    name="email"

                    placeholder="Enter Email"

                    value={user.email}

                    onChange={handleChange}

                    required

                />

                <br /><br />

                <input

                    type="text"

                    name="phone"

                    placeholder="Enter Phone Number"

                    value={user.phone}

                    onChange={handleChange}

                    required

                />

                <br /><br />

                <input

                    type="password"

                    name="password"

                    placeholder="Enter Password"

                    value={user.password}

                    onChange={handleChange}

                    required

                />

                <br /><br />

                <button type="submit">

                    Register

                </button>

            </form>

        </div>

    );

}

export default Register;