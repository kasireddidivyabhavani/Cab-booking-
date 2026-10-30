import { Link, useNavigate } from "react-router-dom";
function Anav() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("adminToken");

        navigate("/alogin");

    };

    return (
            <nav
            style={{
                display:"flex",
                gap:"20px",
                padding:"15px",
                background:"#0d6efd",
                color:"white"
            }}
        >   

            <Link
                to="/ahome"
                style={{color:"white"}}
            >
                Home
            </Link>

            <Link
                to="/users"
                style={{color:"white"}}
            >
                Users
            </Link>

            <Link
                to="/bookings"
                style={{color:"white"}}
            >
                Bookings
            </Link>

            <Link
                to="/acabs"
                style={{color:"white"}}
            >
                Cabs
            </Link>

            <Link
                to="/addcar"
                style={{color:"white"}}
            >
                Add Car
            </Link>

            <button
                onClick={logout}
                style={{marginLeft:"auto"}}
            >
                Logout
            </button>

        </nav>
    );

}

export default Anav;