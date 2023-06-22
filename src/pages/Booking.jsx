import { useReducer, useEffect } from "react"
import { fetchAPI, submitAPI } from '../utils/API'
import { useNavigate } from "react-router-dom"

import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import BookingForm from "../components/BookingForm"
import Navigation from "../components/Navigation"

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

export default function Booking() {
  const navigate = useNavigate();
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

  useEffect(() => {
    console.log(availableTimes)
  }, [availableTimes])


  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate('/booking-confirmation');
  }; 

  return (
    <>
        <Navigation/>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
        <About/>
        <Testimonials/>
        <Footer/>
    </>
  )
}
