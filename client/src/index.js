import React from "react";

import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import FlightList from './components/FlightList';
import NewFlightForm from "./components/NewFlightForm";
import NewBookingForm from "./components/NewBookingForm";
import BookingsList from "./components/BookingsList";

import "./index.css";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <FlightList/>
            },
            {
                path: "/add_flight",
                element: <NewFlightForm/>
            },
            {
                path: "/add_booking",
                element: <NewBookingForm/>
            },
            {
                path: "/bookings_list",
                element: <BookingsList/>
            }
        ]
    }
])

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router}/>);
