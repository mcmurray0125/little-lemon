import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import footerLogo from "../assets/footer-logo.png"

export default function Footer() {
  return (
    <footer className="bg-light text-center">
      <Container className='py-4'>
        <Row>
          <Col sm={3} className='d-flex align-items-center'>
              <img
                src={footerLogo}
                alt="Footer image"
                style={{ height: '150px' }}
              />
          </Col>
          <Col sm={3}>
            <div className='text-start'>
              <h5>Doormat Navigation</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Menu</a>
                </li>
                <li>
                  <a href="/">Reservations</a>
                </li>
                <li>
                  <a href="/r">Online Order</a>
                </li>
                <li>
                  <a href="/">Login</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={3}>
            <div className='text-start'>
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li><a href='/'>Address</a></li>
                <li><a href='/'>Phone Number</a></li>
                <li><a href='/'>Email</a></li>
              </ul>
            </div>
          </Col>
          <Col sm={3}>
            <div className='text-start'>
              <h5>Social Media Links</h5>
              <ul className="list-unstyled">
                <li><a href='/'>Address</a></li>
                <li><a href='/'>Phone Number</a></li>
                <li><a href='/'>Email</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
