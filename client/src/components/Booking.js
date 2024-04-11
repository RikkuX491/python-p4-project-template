import Flight from './Flight'

function Booking({booking}){
    return (
        <li>
            <h1>Booking # {booking.id}</h1>
            <h2>Price: {booking.price}</h2>
            <h2>Destination: {booking.destination}</h2>
            <h2>Flight Info:</h2>
            <Flight flight={booking.flight}/>
        </li>
    )
}

export default Booking;