import React from 'react';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import GetProducts from "../components/GetProducts";

function ProductList() {
    return (
        <Container fluid className="page-container">
            <div className="product-wrapper">
                <div className="top-bar">
                    <h2>Product List</h2>
                    <div>
                        <Button variant="primary" id="add-product-btn" href="/add">Add new product</Button>{' '}
                        <Button variant="danger" id="delete-product-btn"
                                onClick={() => {
                                    // handle delete logic here
                                }}>Mass delete</Button>{' '}
                    </div>
                </div>
                <hr/>
                <GetProducts />
            </div>
        </Container>
    );
}

export default ProductList;