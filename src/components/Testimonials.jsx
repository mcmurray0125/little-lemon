import React from 'react'
import Container from "react-bootstrap/Container"
import testimonials from "../testimonialsData"
import TestimonialCard from './Cards/TestimonialCard'

export default function Testimonials() {
  return (
    <div id='testimonials'>
        <Container className='testimonials-container d-flex flex-column justify-content-center py-5'>
            <div className='testimonials-heading px-5 mb-5'>
                <h1 className='text-center text-white'>Testimonials</h1>
            </div>
            <section className='testimonials-wrapper'>
                {testimonials.map((testimonial, index) => {
                    return (
                        <TestimonialCard key={index} testimonial={testimonial}/>
                    )
                })}
            </section>
        </Container>
    </div>
  )
}
