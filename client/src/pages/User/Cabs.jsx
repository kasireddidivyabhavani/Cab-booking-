import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Unav from "../../components/Unav";

function Cabs() {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchCars = async () => {

            try {

                const res = await axios.get(
                    "http://localhost:8000/api/cars"
                );

                setCars(res.data);

            } catch (error) {

                console.error("Error Fetching Cars:", error);

            }

        };

        fetchCars();

    }, []);

    return (

        <>
            <Unav />

            <div style={{ padding: "20px" }}>

                <h2>Available Cabs</h2>

                {cars.length === 0 ? (

                    <h3>No Cabs Available</h3>

                ) : (

                    cars.map((car) => (

                        <div
                            key={car._id}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "15px",
                                marginBottom: "20px"
                            }}
                        >

                            <h3>{car.carName}</h3>

                            <p><strong>Model:</strong> {car.model}</p>

                            <p><strong>Number Plate:</strong> {car.numberPlate}</p>

                            <p><strong>Price / Km:</strong> ₹{car.pricePerKm}</p>

                            <p>
                                <strong>Status:</strong>{" "}
                                {car.available ? "Available" : "Not Available"}
                            </p>

                            {car.image && (
                                <img
                                    src={car.image}
                                    alt={car.carName}
                                    width="200"
                                    height="120"
                                    style={{ objectFit: "cover", borderRadius: "8px" }}
                                />
                            )}

                            <br /><br />

                            <button
                                disabled={!car.available}
                                onClick={() => navigate(`/bookcab/${car._id}`)}
                            >
                                Book Now
                            </button>

                        </div>

                    ))

                )}

            </div>
        </>

    );

}

export default Cabs;