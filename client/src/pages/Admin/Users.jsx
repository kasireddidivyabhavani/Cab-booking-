import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Anav from "../../components/Anav";

function Users() {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchUsers = async () => {

            try {

                const res = await axios.get(
                    "http://localhost:8000/api/users"
                );

                setUsers(res.data);

            } catch (error) {

                console.error("Error Fetching Users :", error);

            }

        };

        fetchUsers();

    }, []);

    const deleteUser = async (id) => {

        if (!window.confirm("Are you sure you want to delete this user?"))
            return;

        try {

            await axios.delete(
                `http://localhost:8000/api/users/${id}`
            );

            alert("User Deleted Successfully");

            setUsers(users.filter((user) => user._id !== id));

        } catch (error) {

            console.error("Delete Error :", error);

        }

    };

    return (

        <>

            <Anav />

            <div>

                <h2>All Users</h2>

                {

                    users.length === 0 ?

                        <p>No Users Available</p>

                        :

                        users.map((user) => (

                            <div
                                key={user._id}
                                style={{
                                    border: "1px solid gray",
                                    padding: "15px",
                                    margin: "15px",
                                    borderRadius: "5px"
                                }}
                            >

                                <h3>{user.name}</h3>

                                <p>Email : {user.email}</p>

                                <p>Phone : {user.phone}</p>

                                <button
                                    onClick={() =>
                                        navigate(`/useredit/${user._id}`)
                                    }
                                >
                                    Edit
                                </button>

                                &nbsp;

                                <button
                                    onClick={() =>
                                        deleteUser(user._id)
                                    }
                                >
                                    Delete
                                </button>

                            </div>

                        ))

                }

            </div>

        </>

    );

}

export default Users;