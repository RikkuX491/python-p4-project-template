import React, { useEffect, useState } from "react";
import {Outlet} from 'react-router-dom';

import NavBar from './NavBar'

function App() {

  const [flights, setFlights] = useState([])

  useEffect(() => {
    fetch('/flights')
    .then(response => response.json())
    .then(flightsData => setFlights(flightsData))
  }, [])

  return (
    <div>
      <NavBar/>
      <Outlet context={{flights: flights}}/>
    </div>
  )
}

export default App;
