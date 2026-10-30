import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditCar() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [car, setCar] = useState({

        carName: "",

        carNumber: "",

        carType: "",

        price: ""

    });

    useEffect(() => {

        const fetchCar = async () => {

            try {

                const res = await axios.get("http://localhost:8000/api/cars");

                const selectedCar = res.data.find(c => c._id === id);

                if (selectedCar) {

                    setCar(selectedCar);

                }

            } catch (error) {

                console.log(error);

            }

        };

        fetchCar();

    }, [id]);

    const handleChange = (e) => {

        setCar({

            ...car,

            [e.target.name]: e.target.value

        });

    };

    const updateCar = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.put(

                `http://localhost:8000/api/cars/${id}`,

                car

            );

            alert(res.data.message);

            navigate("/acabs");

        }

        catch (error) {

            alert(error.response?.data?.message || "Update Failed");

        }

    };

    return (

        <div>

            <h2>Edit Car</h2>

            <form onSubmit={updateCar}>

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

                    name="carNumber"

                    placeholder="Car Number"

                    value={car.carNumber}

                    onChange={handleChange}

                    required

                />

                <br /><br />

                <input

                    type="text"

                    name="carType"

                    placeholder="Car Type"

                    value={car.carType}

                    onChange={handleChange}

                    required

                />

                <br /><br />

                <input

                    type="number"

                    name="price"

                    placeholder="Price"

                    value={car.price}

                    onChange={handleChange}

                    required

                />

                <br /><br />

                <button type="submit">

                    Update Car

                </button>

            </form>

        </div>

    );

}

export default EditCar;