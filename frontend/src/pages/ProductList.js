import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import GetProducts from "../components/GetProducts";

function ProductList() {
    return (
        <Container fluid className="page-container">
            <div className="top-bar">
                <h2>Product List</h2>
                <div>
                    <Button variant="primary" id="add-product-btn" href="/add">Add</Button>{' '}
                    <Button variant="danger" id="delete-product-btn">Mass Delete</Button>{' '}
                </div>
            </div>
            <hr/>
            <div className="product-content">
                <GetProducts />
            </div>
        </Container>
    );
}

export default ProductList;