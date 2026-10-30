import { Routes, Route } from "react-router-dom";

/* User Pages */

import Home from "./pages/User/Home";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Uhome from "./pages/User/Uhome";
import Cabs from "./pages/User/Cabs";
import BookCab from "./pages/User/BookCab";
import MyBookings from "./pages/User/MyBookings";

/* Admin Pages */
import EditCar from "./pages/Admin/EditCar";
import Alogin from "./pages/Admin/Alogin";
import Aregister from "./pages/Admin/Aregister";
import Ahome from "./pages/Admin/Ahome";
import Users from "./pages/Admin/Users";
import UserEdit from "./pages/Admin/UserEdit";
import Bookings from "./pages/Admin/Bookings";
import Acabs from "./pages/Admin/Acabs";
import Acabedit from "./pages/Admin/Acabedit";
import Addcar from "./pages/Admin/Addcar";

function App() {

    return (

        <Routes>

            {/* Home */}

            <Route path="/" element={<Home />} />

            {/* User */}

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/uhome" element={<Uhome />} />

            <Route path="/cabs" element={<Cabs />} />

            <Route path="/bookcab/:id" element={<BookCab />} />

            <Route path="/mybookings" element={<MyBookings />} />

            {/* Admin */}
            <Route path="/editcar/:id" element={<EditCar />} />

            <Route path="/alogin" element={<Alogin />} />

            <Route path="/aregister" element={<Aregister />} />

            <Route path="/ahome" element={<Ahome />} />

            <Route path="/users" element={<Users />} />

            <Route path="/useredit/:id" element={<UserEdit />} />

            <Route path="/bookings" element={<Bookings />} />

            <Route path="/acabs" element={<Acabs />} />

            <Route path="/acabedit/:id" element={<Acabedit />} />

            <Route path="/addcar" element={<Addcar />} />

        </Routes>

    );

}

export default App;