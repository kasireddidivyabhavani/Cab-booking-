import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Anav from "../../components/Anav";

function Addcar() {

    const navigate = useNavigate();

    const [car, setCar] = useState({

        carName: "",

        model: "",

        numberPlate: "",

        pricePerKm: "",

        image: "",

        available: true

    });

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setCar({

            ...car,

            [name]: type === "checkbox" ? checked : value

        });

    };

    const addCar = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(

                "http://localhost:8000/api/cars/add",

                car

            );

            alert(res.data.message);

            navigate("/acabs");

        }

        catch (error) {

            console.error(error);

            alert(

                error.response?.data?.message ||

                "Failed to Add Car"

            );

        }

    };

    return (

        <>

            <Anav />

            <div>

                <h2>Add New Car</h2>

                <form onSubmit={addCar}>

                    <input

                        type="text"

                        name="carName"

                        placeholder="Car Name"

                        value={car.carName}

                        onChange={handleChange}

                        required

                    />

                    <br /><br />

                    <input

                        type="text"

                        name="model"

                        placeholder="Model"

                        value={car.model}

                        onChange={handleChange}

                        required

                    />

                    <br /><br />

                    <input

                        type="text"

                        name="numberPlate"

                        placeholder="Number Plate"

                        value={car.numberPlate}

                        onChange={handleChange}

                        required

                    />

                    <br /><br />

                    <input

                        type="number"

                        name="pricePerKm"

                        placeholder="Price Per Km"

                        value={car.pricePerKm}

                        onChange={handleChange}

                        required

                    />

                    <br /><br />

                    <input

                        type="text"

                        name="image"

                        placeholder="Image URL (Optional)"

                        value={car.image}

                        onChange={handleChange}

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

                        Add Car

                    </button>

                </form>

            </div>

        </>

    );

}

export default Addcar;