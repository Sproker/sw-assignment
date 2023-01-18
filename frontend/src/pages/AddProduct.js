import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import AddProductForm from "../components/AddProductForm";

function AddProduct() {
    return (
        <Container fluid className="page-container">
            <div className="inner-container">
                <div className="top-bar">
                    <h2>Product Add</h2>
                    <div>
                        <Button variant="primary"
                                id="save-product-btn"
                                form="add_product_form"
                                type="submit">Save</Button>{' '}
                        <Button variant="secondary"
                                id="cancel-product-btn"
                                href="/">Cancel</Button>{' '}
                    </div>
                </div>
                <hr/>
                <AddProductForm/>
            </div>
        </Container>
    );
}

export default AddProduct;