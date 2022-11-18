import { Nav, Navbar, Container } from "react-bootstrap"

const CustomNavbar = () => (
    <Navbar expand="md" sticky="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Global Solution - PCD</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar" />
            <Navbar.Collapse>
                <Nav className="ms-auto">
                    <Nav.Link href="#main">Inicio</Nav.Link>
                    <Nav.Link href="#mapa">Google Maps</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default CustomNavbar