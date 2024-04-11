import { useOutletContext } from "react-router-dom";
import Booking from './Booking';

function BookingsList(){

    const {bookings} = useOutletContext();

    const bookingComponents = bookings.map(booking => {
        return <Booking key={booking.id} booking={booking}/>
    })

    return <ul>{bookingComponents}</ul>
}

export default BookingsList;