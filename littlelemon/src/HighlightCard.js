import { Image, Row, Col } from 'react-bootstrap';

const HighlightCard = (props) => {
    return (
        <Col className="highlight-card">
            <Row>
                <Col>
                    <Image src={props.img}  className='highlight-image' />
                </Col>
            </Row>
            <Row className="d-flex justify-content-between">
                <h2>{props.title}</h2>
                <span id="card-price">${props.price}</span>
            </Row>
            <Row>
                <p>{props.description}</p>
            </Row>
            <Row className="d-flex justify-content-start align-items-center">
                <span>Order a delivery</span>
                <Image src="images/food-bike-delivery-icon.svg" id="order_icon" />
            </Row>
        </Col>
    );
}
export default HighlightCard;
