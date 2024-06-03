import { Navbar, Nav, Container, Stack, Image } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar id="navbar">
                <Container>
                    <Navbar.Brand href="index.html" id="navbar-brand">
                        <Image src="images/logo.svg" alt="Logo"></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto flex-column flex-lg-row">
                            <Nav.Link href="index.html">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#menu">Menu</Nav.Link>
                            <Nav.Link href="#reservations">Reservations</Nav.Link>
                            <Nav.Link href="#onlineorder">Online Order</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>);
}
export default Header;
