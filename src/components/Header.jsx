import { Container } from 'react-bootstrap'
import headerImage from "../assets/header-image.jpg"
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Container className='py-4'>
        <section className='header-text'>
          <h1 className='title'>Little Lemon</h1>
          <h3 className='subtitle'>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button className='reserve-btn'><Link className='btn-link text-decoration-none' to="/booking">Reserve a Table</Link></Button>
        </section>
        <section className='header-image'>
          <img src={headerImage}/>
        </section>
      </Container>
    </header>
  )
}
