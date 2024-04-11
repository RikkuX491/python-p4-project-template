import {NavLink} from 'react-router-dom';

function NavBar(){
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add_flight">Add Flight</NavLink>
            <NavLink to="/add_booking">Add Booking</NavLink>
            <NavLink to="/bookings_list">View Bookings List</NavLink>
        </nav>
    )
}

export default NavBar;