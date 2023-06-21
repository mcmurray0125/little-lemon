import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import BookingForm from "../components/BookingForm"
import Navigation from "../components/Navigation"

export default function Booking() {
  return (
    <>
        <Navigation/>
        <BookingForm/>
        <About/>
        <Testimonials/>
        <Footer/>
    </>
  )
}
