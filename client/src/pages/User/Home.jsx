import { Link } from "react-router-dom";

function Home() {
    return (
        <div>

            <h1>Cab Booking System</h1>

            <p>
                Welcome to the Online Cab Booking System.
            </p>

            <Link to="/login">
                <button>User Login</button>
            </Link>

            <br /><br />

            <Link to="/register">
                <button>User Register</button>
            </Link>

            <br /><br />

            <Link to="/alogin">
                <button>Admin Login</button>
            </Link>

        </div>
    );
}

export default Home;