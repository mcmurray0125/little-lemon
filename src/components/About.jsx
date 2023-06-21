import Container from "react-bootstrap/Container"
import cooksA from "../assets/restaurant.jpg"
import chefB from "../assets/chef-b.jpg"

export default function About() {
  return (
    <Container className='py-4' id="about-us">
        <section className='about-text'>
            <h1 className='title'>Little Lemon</h1>
            <h3 className='subtitle'>Chicago</h3>
            <p>Experience the taste of the Mediterranean at Little Lemon. Our vibrant restaurant serves a tantalizing fusion of traditional and modern cuisine, featuring tangy lemon-infused dishes and aromatic herbs. Discover the magic of Mediterranean flavors in every bite.</p>
        </section>
        <section className='about-images'>
            <div className="image-wrapper">
                <img src={cooksA} id="about-image1" alt="about us image 1"/>
            </div>
            <div className="image-wrapper">
                <img src={chefB} id="about-image2" alt="about us image 2"/>
            </div>
        </section>
    </Container>
  )
}
