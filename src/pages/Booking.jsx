import { useReducer } from "react"

import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import BookingForm from "../components/BookingForm"
import Navigation from "../components/Navigation"

export default function Booking() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  function initializeTimes() {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];
  }

  function updateTimes(date) {
    // Update availableTimes based on the selected date
    // For now, return the same available times regardless of the date
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];
  }

  return (
    <>
        <Navigation/>
        <BookingForm availableTimes={availableTimes}/>
        <About/>
        <Testimonials/>
        <Footer/>
    </>
  )
}
