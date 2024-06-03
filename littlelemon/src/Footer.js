import { Navbar, Nav, Container, Stack, Image} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Stack direction="horizontal" gap={5} className="ml-auto flex-column flex-lg-row">
                <Image src="images/logo.svg" alt="Logo"></Image>
                <Stack direction="vertical">
                    <p>Navigation</p>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="menu.html">Menu</a></li>
                        <li><a href="reservations.html">Reservations</a></li>
                        <li><a href="onlineorder.html">Online Order</a></li>
                        <li><a href="login.html">Login</a></li>
                    </ul>
                </Stack>
                <Stack direction="vertical">
                    <p>Contact</p>
                    <ul>
                        <li>Address</li>
                        <li>012-3456-7890</li>
                        <li>contact@littlelemon.com</li>
                    </ul>
                </Stack>
                <Stack direction="vertical">
                    <p>Social Media Links</p>
                    <ul>
                        <li><a href="http://facebook.com">Facebook</a></li>
                        <li><a href="http://instagram.com">Instagram</a></li>
                        <li><a href="http://twitter.com">X</a></li>
                    </ul>
                </Stack>
            </Stack>
        </footer>
    )
}
export default Footer;
