import { Container, Button, Row, Col } from 'react-bootstrap';
import HighlightCard from './HighlightCard';

const Cards = [
    {
        "img": "images/greeksalad.jpg",
        "title": "Greek salad",
        "price": "12.99",
        "description": "The greek salad of crispy lettuce, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        "img": "images/bruchetta.svg",
        "title": "Bruchetta",
        "price": "5.99",
        "description": "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
    },
    {
        "img": "images/lemondessert.jpg",
        "title": "Lemon Dessert",
        "price": "5.00",
        "description": "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    },
];

const Highlight = () => {
    return (
        <Container className="inner_container">
            <Row className="d-flex justify-content-between">
                <Col className = "d-flex justify-content-between">
                    <h1>Specials</h1>
                    <Button id="lemon-button">Online Menu</Button>
                </Col>
            </Row>
            <Row className="d-flex justify-content-between">
                <Col>
                    <HighlightCard {...Cards[0]} />
                </Col>
                <Col>
                    <HighlightCard {...Cards[1]} />
                </Col>
                <Col>
                    <HighlightCard {...Cards[2]} />
                </Col>
            </Row>
        </Container>
    );
}
export default Highlight;
