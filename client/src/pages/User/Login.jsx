import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const loginUser = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(

                "http://localhost:8000/api/users/login",

                user

            );

            alert(res.data.message);

            localStorage.setItem("token", res.data.token);

            navigate("/uhome");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return (

        <div>

            <h2>User Login</h2>

            <form onSubmit={loginUser}>

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

                    type="password"

                    name="password"

                    placeholder="Enter Password"

                    value={user.password}

                    onChange={handleChange}

                    required

                />

                <br /><br />

                <button type="submit">

                    Login

                </button>

            </form>

            <br />

            <p>

                Don't have an account?

                <Link to="/register"> Register</Link>

            </p>

        </div>

    );

}

export default Login;