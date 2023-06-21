import { CardImg } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import CardHeader from "react-bootstrap/esm/CardHeader"
export default function SpecialCard( { special } ) {
  return (
    <Card className="specials-card">
        <CardHeader>
            <CardImg src={special.image}/>
        </CardHeader>
        <Card.Body className="d-flex flex-column justify-content-evenly">
          <div className="special-title d-flex justify-content-between">
            <h5>{special.title}</h5>
            <h5 className="special-price">${special.price}</h5>
          </div>
          <p>{special.description}</p>
          <a className="fw-bold text-decoration-none text-black">Order a Delivery <i className="fa-solid fa-bicycle"></i></a>
        </Card.Body>
    </Card>
  )
}
