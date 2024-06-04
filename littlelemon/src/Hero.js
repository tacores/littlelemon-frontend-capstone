import { Container, Image, Button, Row, Col } from 'react-bootstrap';

const Hero = () => {
    return (
        <Container id="hero_outer_container">
            <Row id="hero_container">
                <Col>
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                    <p>A cozy Chicago eatery offering<br />
                    fresh, flavorful Mediterranean<br />
                    cuisine in a warm and inviting<br />
                    atmosphere.</p>
                    <Button id="lemon-button" href="/booking">Reserve a Table</Button>
                </Col>
                <Col>
                    <Image src="images/restauranfood.jpg" id="hero_image"></Image>
                </Col>        
            </Row>
        </Container>
    );
}
export default Hero;
