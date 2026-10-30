import { Link, useNavigate } from "react-router-dom";

function Unav() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

    };

    return (

        <nav
            style={{
                display: "flex",
                gap: "20px",
                padding: "15px",
                backgroundColor: "#1976d2",
                color: "white"
            }}
        >

            <Link
                to="/uhome"
                style={{ color: "white", textDecoration: "none" }}
            >
                Home
            </Link>

            <Link
                to="/cabs"
                style={{ color: "white", textDecoration: "none" }}
            >
                Cabs
            </Link>

            <Link
                to="/mybookings"
                style={{ color: "white", textDecoration: "none" }}
            >
                My Bookings
            </Link>

            <button
                onClick={logout}
                style={{
                    marginLeft: "auto",
                    cursor: "pointer"
                }}
            >
                Logout
            </button>

        </nav>

    );

}

export default Unav;