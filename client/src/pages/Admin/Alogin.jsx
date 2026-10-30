import { useState } from "react";
import axios from "axios";

function Alogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const adminLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:8000/api/admin/login",
                {
                    email,
                    password
                }
            );

            alert(res.data.message);

            localStorage.setItem("adminToken", res.data.token);

            window.location.href = "/ahome";

        } catch (error) {

            alert(error.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div>

            <h2>Admin Login</h2>

            <form onSubmit={adminLogin}>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <br /><br />

                <button type="submit">

                    Login

                </button>

            </form>

        </div>

    );

}

export default Alogin;