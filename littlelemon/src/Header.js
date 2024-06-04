import { Navbar, Nav, Container, Image } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Container className="inner_container">
                <Navbar id="navbar">
                    <Image src="images/logo.svg" alt="Logo"></Image>
                    <Nav className="ml-auto flex-column flex-lg-row">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="booking">Reservations</Nav.Link>
                        <Nav.Link href="#onlineorder">Online Order</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </header>);
}
export default Header;
