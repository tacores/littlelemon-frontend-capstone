import BookingForm from "./BookingForm";
import { Container } from 'react-bootstrap';

const BookingPage = (props) => {
    return(
        <Container className="booking_container">
            <BookingForm availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} />
        </Container>
    );
}
export default BookingPage;
