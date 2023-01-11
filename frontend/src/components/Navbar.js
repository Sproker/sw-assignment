import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
    return (
        <Navbar bg="light" classname="d-flex">
            <Container fluid>
                <Navbar.Brand>Scandiweb test</Navbar.Brand>
                    <Nav className="me-0">
                        <Nav.Link href="/">Product List</Nav.Link>
                        <Nav.Link href="/add">Add Product</Nav.Link>
                        <Nav.Link href="https://github.com/Sproker/sw-assignment">Github</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default navbar;