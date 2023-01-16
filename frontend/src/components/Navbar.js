import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
    return (
        <Navbar bg="light" classname="d-flex">
            <Container fluid>
                <Navbar.Brand href="/">Scandiweb test</Navbar.Brand>
                    <Nav className="me-0">
                        <Nav.Link href="https://github.com/Sproker/sw-assignment">Github</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default navbar;