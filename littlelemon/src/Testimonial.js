import { Container, Row } from 'react-bootstrap';
import RatingCard from './RatingCard';

const Cards = [
    {
        "score": "5",
        "img": "https://randomuser.me/api/portraits/thumb/women/72.jpg",
        "name": "Sibylla",
        "review": "LittleLemon exceeded all my expectations! The food was absolutely delicious and the service was impeccable. I highly recommend the lemon chicken - it's a must-try!",
    },
    {
        "score": "5",
        "img": "https://randomuser.me/api/portraits/thumb/men/12.jpg",
        "name": "Momir",
        "review": "I had an amazing dining experience at LittleLemon. The ambiance was cozy and inviting, and the staff were incredibly friendly. The lemon tart was the perfect way to end the meal.",
    },
    {
        "score": "4",
        "img": "https://randomuser.me/api/portraits/thumb/men/13.jpg",
        "name": "John",
        "review": "LittleLemon is my new favorite restaurant! The flavors were fresh and vibrant, and the presentation was beautiful. The lemon risotto was a standout dish that I can't stop thinking about.",
    },
    {
        "score": "5",
        "img": "https://randomuser.me/api/portraits/thumb/women/20.jpg",
        "name": "Risa",
        "review": "Every dish we tried at LittleLemon was a delight. The attention to detail in both the food and the service was outstanding. I can't wait to come back and try more of their menu.",
    },
];

const Testimonial = () => {
    return (
        <Container className="inner_container">
            <Row className="d-flex justify-content-center">
                <h1 id="testimonials_title">Testimonials</h1>
            </Row>
            <Row className="d-flex justify-content-between">
                <RatingCard {...Cards[0]} />
                <RatingCard {...Cards[1]} />
                <RatingCard {...Cards[2]} />
                <RatingCard {...Cards[3]} />
            </Row>
        </Container>
    );
}
export default Testimonial;
