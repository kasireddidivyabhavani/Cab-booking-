import { useState } from "react";
import axios from "axios";

function Aregister() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerAdmin = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:8000/api/admin/register",
                {
                    name,
                    email,
                    password
                }
            );

            alert(res.data.message);

            window.location.href = "/alogin";

        } catch (error) {

            alert(error.response?.data?.message || "Registration Failed");

        }

    };

    return (

        <div>

            <h2>Admin Register</h2>

            <form onSubmit={registerAdmin}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <br /><br />

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

                    Register

                </button>

            </form>

        </div>

    );

}

export default Aregister;