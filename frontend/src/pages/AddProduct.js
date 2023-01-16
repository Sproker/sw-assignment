import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import AddProductForm from "../components/AddProductForm";

function AddProduct() {
    return (
        <Container className="page-container" fluid>
            <div className="top-bar">
                <h2>Product Add</h2>
                <div>
                    <Button variant="primary" id="save-product-btn" type="submit">Save</Button>{' '}
                    <Button variant="secondary" id="cancel-product-btn" href="/">Cancel</Button>{' '}
                </div>
            </div>
            <hr/>
            <div className="product-content">
                <AddProductForm />
            </div>
        </Container>
    );
}

export default AddProduct;