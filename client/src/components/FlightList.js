import { useOutletContext } from "react-router-dom";

import Flight from './Flight';

function FlightList(){

    const {flights} = useOutletContext()

    const flightsComponents = flights.map(flight => {
        console.log(flight)
        return <Flight key={flight.id} flight={flight}/>
    })

    return (
        <ul>{flightsComponents}</ul>
    )
}

export default FlightList;