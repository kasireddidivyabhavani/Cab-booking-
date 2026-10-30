import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Anav from "../../components/Anav";

function Acabedit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [car, setCar] = useState({

        carName: "",

        model: "",

        numberPlate: "",

        pricePerKm: "",

        available: true

    });

    useEffect(() => {

        const fetchCar = async () => {

            try {

                const res = await axios.get(

                    `http://localhost:8000/api/cars/${id}`

                );

                setCar(res.data);

            }

            catch (error) {

                console.error("Error Fetching Car :", error);

            }

        };

        fetchCar();

    }, [id]);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setCar({

            ...car,

            [name]: type === "checkbox" ? checked : value

        });

    };

    const updateCar = async (e) => {

        e.preventDefault();

        try {

            await axios.put(

                `http://localhost:8000/api/cars/${id}`,

                car

            );

            alert("Car Updated Successfully");

            navigate("/acabs");

        }

        catch (error) {

            console.error("Update Error :", error);

        }

    };

    return (

        <>

            <Anav />

            <div>

                <h2>Edit Cab</h2>

                <form onSubmit={updateCar}>

                    <input

                        type="text"

                        name="carName"

                        value={car.carName}

                        onChange={handleChange}

                        placeholder="Car Name"

                        required

                    />

                    <br /><br />

                    <input

                        type="text"

                        name="model"

                        value={car.model}

                        onChange={handleChange}

                        placeholder="Model"

                        required

                    />

                    <br /><br />

                    <input

                        type="text"

                        name="numberPlate"

                        value={car.numberPlate}

                        onChange={handleChange}

                        placeholder="Number Plate"

                        required

                    />

                    <br /><br />

                    <input

                        type="number"

                        name="pricePerKm"

                        value={car.pricePerKm}

                        onChange={handleChange}

                        placeholder="Price Per Km"

                        required

                    />

                    <br /><br />

                    <label>

                        Available

                        <input

                            type="checkbox"

                            name="available"

                            checked={car.available}

                            onChange={handleChange}

                        />

                    </label>

                    <br /><br />

                    <button type="submit">

                        Update Cab

                    </button>

                </form>

            </div>

        </>

    );

}

export default Acabedit;