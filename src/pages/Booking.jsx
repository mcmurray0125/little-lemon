import { useReducer, useEffect } from "react"
import { fetchAPI, submitAPI } from '../utils/API'

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
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
  
  function initializeTimes() {
    // Initialize available times with some default values
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
  }

  useEffect(() => {
    console.log(availableTimes)
  }, [availableTimes])


  function handleFormSubmit(formData) {
    const success = submitAPI(formData);
    // Handle the submission result
  }

  return (
    <>
        <Navigation/>
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} dispatchOnDateChange={dispatchOnDateChange}/>
        <About/>
        <Testimonials/>
        <Footer/>
    </>
  )
}
