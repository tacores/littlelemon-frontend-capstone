import { Image, Row, Col } from 'react-bootstrap';

const RatingCard = (props) => {
    return (
        <Col className="rating-card">
            <Row>
                <span>⭐{props.score}</span>
            </Row>
            <Row className="d-flex justify-content-start align-items-center">
                <Image src={props.img} id="rating_photo" />
                <span>{props.name}</span>
            </Row>
            <Row>
                <p>{props.review}</p>
            </Row>
        </Col>
    );
}
export default RatingCard;