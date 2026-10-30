import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Anav from "../../components/Anav";

function Acabs() {

    const [cars, setCars] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchCars = async () => {

            try {

                const res = await axios.get(
                    "http://localhost:8000/api/cars"
                );

                setCars(res.data);

            }

            catch (error) {

                console.error("Error Fetching Cars :", error);

            }

        };

        fetchCars();

    }, []);

    const deleteCar = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this car?"
        );

        if (!confirmDelete) return;

        try {

            await axios.delete(

                `http://localhost:8000/api/cars/${id}`

            );

            alert("Car Deleted Successfully");

            setCars(

                cars.filter(

                    (car) => car._id !== id

                )

            );

        }

        catch (error) {

            console.error("Delete Error :", error);

        }

    };

    return (

        <>

            <Anav />

            <div>

                <h2>Manage Cabs</h2>

                {

                    cars.length === 0 ?

                        <p>No Cars Available</p>

                        :

                        cars.map((car) => (

                            <div

                                key={car._id}

                                style={{
                                    border: "1px solid gray",
                                    margin: "15px",
                                    padding: "15px",
                                    borderRadius: "5px"
                                }}

                            >

                                <h3>{car.carName}</h3>

                                <p>Model : {car.model}</p>

                                <p>Number Plate : {car.numberPlate}</p>

                                <p>Price/Km : ₹{car.pricePerKm}</p>

                                <p>

                                    Status :

                                    {

                                        car.available

                                            ? " Available"

                                            : " Not Available"

                                    }

                                </p>

                                <button

                                    onClick={() =>

                                        navigate(`/acabedit/${car._id}`)

                                    }

                                >

                                    Edit

                                </button>

                                &nbsp;

                                <button

                                    onClick={() =>

                                        deleteCar(car._id)

                                    }

                                >

                                    Delete

                                </button>
                                <button
    onClick={() => navigate(`/editcar/${car._id}`)}
>
    Edit
</button>

                            </div>

                        ))

                }

            </div>

        </>

    );

}

export default Acabs;