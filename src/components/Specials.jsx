import React from 'react'
import { Container, Button } from 'react-bootstrap'
import specials from "../specialsData"
import SpecialCard from './SpecialCard'

export default function Specials() {
  return (
    <Container className='specials-container d-flex flex-column justify-content-center'>
        <div className='specials-heading px-5 mb-5'>
            <h1>Specials</h1>
            <Button>Online Menu</Button>
        </div>
        <section className='specials-wrapper'>
            {specials.map((special, index) => {
                return (
                    <SpecialCard key={index} special={special}/>
                )
            })}
        </section>
    </Container>
  )
}
