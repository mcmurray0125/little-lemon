import Card from "react-bootstrap/Card"

export default function TestimonialCard({ testimonial }) {
  return (
    <Card className="testimonial-card">
        <Card.Body>
            <div className="user-info" style={{fontSize: "12px"}}>
                <div className="user-img-wrapper">
                    <Card.Img src={testimonial.image}/>
                </div>
                <div>
                    <h6>{testimonial.name}</h6>
                    <p className="m-0">{testimonial.username}</p>
                </div>
            </div>
            <p style={{fontSize: "14px"}} className="m-0 review-text">{testimonial.review}</p>
        </Card.Body>
    </Card>
  )
}
