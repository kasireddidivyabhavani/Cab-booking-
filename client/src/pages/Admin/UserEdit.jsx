import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Anav from "../../components/Anav";

function UserEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [user, setUser] = useState({

        name: "",

        email: "",

        phone: ""

    });

    useEffect(() => {

        const fetchUser = async () => {

            try {

                const res = await axios.get(
                    `http://localhost:8000/api/users/${id}`
                );

                setUser(res.data);

            } catch (error) {

                console.error("Error :", error);

            }

        };

        fetchUser();

    }, [id]);

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const updateUser = async (e) => {

        e.preventDefault();

        try {

            await axios.put(

                `http://localhost:8000/api/users/${id}`,

                user

            );

            alert("User Updated Successfully");

            navigate("/users");

        }

        catch (error) {

            console.error("Update Error :", error);

        }

    };

    return (

        <>

            <Anav />

            <div>

                <h2>Edit User</h2>

                <form onSubmit={updateUser}>

                    <input

                        type="text"

                        name="name"

                        value={user.name}

                        onChange={handleChange}

                        placeholder="Enter Name"

                        required

                    />

                    <br /><br />

                    <input

                        type="email"

                        name="email"

                        value={user.email}

                        onChange={handleChange}

                        placeholder="Enter Email"

                        required

                    />

                    <br /><br />

                    <input

                        type="text"

                        name="phone"

                        value={user.phone}

                        onChange={handleChange}

                        placeholder="Enter Phone"

                        required

                    />

                    <br /><br />

                    <button type="submit">

                        Update User

                    </button>

                </form>

            </div>

        </>

    );

}

export default UserEdit;