import { Navbar, Nav, Container, Stack, Image, Button, Row, Col } from 'react-bootstrap';

const Hero = () => {
    return (
        <Row id="hero_container">
            <Col className="justify-content-center align-items-center">
                <p>Little Lemon</p>
                <p>Chicago</p>
                <p>A cozy Chicago eatery offering<br />
                fresh, flavorful Mediterranean<br />
                cuisine in a warm and inviting<br />
                atmosphere.</p>
                <Button size="sm">Reserve a Table</Button>
            </Col>
            <Col className="justify-content-center align-items-center">
                <Image src="images/restauranfood.jpg" id="hero_image" className='col-6'></Image>
            </Col>        
        </Row>
    );
}
export default Hero;
