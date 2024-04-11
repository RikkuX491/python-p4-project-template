import React, { useEffect, useState } from "react";
import {Outlet} from 'react-router-dom';

import NavBar from './NavBar'

function App() {

  const [flights, setFlights] = useState([])
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetch('/flights')
    .then(response => response.json())
    .then(flightsData => setFlights(flightsData))
  }, [])

  useEffect(() => {
    fetch('/bookings')
    .then(response => response.json())
    .then(bookingsData => setBookings(bookingsData))
  }, [])

  function addFlight(newFlightData){
    fetch('/flights', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newFlightData)
    })
    .then(response => response.json())
    .then(newFlightData => setFlights([...flights, newFlightData]))
  }

  function addBooking(newBooking){
    fetch('/bookings', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newBooking)
    })
    .then(response => response.json())
    .then(newBookingData => setBookings([...bookings, newBookingData]))
  }

  return (
    <div>
      <NavBar/>
      <Outlet context={{flights: flights, addFlight: addFlight, bookings: bookings, addBooking: addBooking}}/>
    </div>
  )
}

export default App;
