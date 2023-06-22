import React from 'react'
import { Container } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function BookingConfirm() {
  return (
    <section id="booking-confirm">
        <Container>
            <h1 style={{fontSize: "48px"}}>Thanks for Booking!</h1>
            <p className='fs-5'>A confirmation email has been sent with the details.</p>
            <Link to='/' style={{color: "var(--light-grey)", fontSize: "1.25rem"}}>Home</Link>
        </Container>
    </section>
  )
}
