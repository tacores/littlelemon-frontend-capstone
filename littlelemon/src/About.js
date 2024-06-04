import { Container, Image, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container id="inner_container">
            <Row id="hero_container">
                <Col>
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                    <p>Welcome to LittleLemon, where Mario and Adrian's culinary expertise meets heartfelt hospitality. Mario, our creative chef, crafts each dish with locally-sourced ingredients and a passion for flavor. Adrian's warm hospitality ensures every guest feels like family. Together, they've created a unique dining experience that celebrates good food and great company. Join us at LittleLemon, where every meal is a celebration of friendship and flavor.</p>
                </Col>
                <Col>
                    <Image src="images/restaurant chef B.jpg" id="about_image"></Image>
                    <Image src="images/Mario and Adrian A.jpg" id="about_image"></Image>
                </Col>        
            </Row>
        </Container>
    );
}
export default About;
