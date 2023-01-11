import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const products = [
    {
        sku: '555300',
        name: 'Product 1',
        price: '$9.99',
        weight: 'Weight: 40kg'
    },
    {
        sku: '52300',
        name: 'Product 2',
        price: '$19.99',
        dimension: 'Dimension: 40x30x20'
    },
    {
        sku: '5524300',
        name: 'Product 3',
        price: '$29.99',
        dimension: 'Dimension: 40x40x20'
    },
    {
        sku: '55s4300',
        name: 'Product 4',
        price: '$29.99',
        dimension: 'Dimension: 40x40x20'
    },
    {
        sku: '55s4300',
        name: 'Product 5',
        price: '$29.99',
        dimension: 'Dimension: 40x40x20'
    },
    {
        sku: '55s4300',
        name: 'Product 5',
        price: '$29.99',
        dimension: 'Dimension: 40x40x20'
    },
    {
        sku: '55s4300',
        name: 'Product 5',
        price: '$29.99',
        dimension: 'Dimension: 40x40x20'
    },
    {
        sku: 'J55s4300z',
        name: 'Table',
        price: '$29.99',
        dimension: 'Dimension: 40x40x20'
    },
    {
        sku: 'L55s4300',
        name: 'CD Disk',
        price: '$9.99',
        size: 'Size: 40MB'
    },
    {
        sku: 'P55s4300',
        name: 'Product 5',
        price: '$29.99',
        dimension: 'Dimension: 40x40x20'
    },
    {
        sku: 'L55s4300',
        name: 'CD Disk',
        price: '$9.99',
        size: 'Size: 40MB'
    },
    {
        sku: 'P55s4300',
        name: 'Product 5',
        price: '$29.99',
        dimension: 'Dimension: 40x40x20'
    },


];

function ProductList() {
    return (
        <Container fluid className="product-content mt-5">
            <div className="top-bar">
                <h2>Product List</h2>
                <div>
                    <Button variant="outline-primary" id="add-product-btn">Add</Button>{' '}
                    <Button variant="outline-secondary" id="delete-product-btn">Delete</Button>{' '}
                </div>
            </div>
                <hr/>
            <div className="mt-4">
                <Row>
                    {products.map((product, index) => (
                        <Col key={index} xs={6} sm={6} md={4} lg={3} xl={2}
                             className="d-flex justify-content-center mb-4">
                            <Card>
                                <Form.Check
                                    type="checkbox"
                                    className="delete-checkbox mt-2 ms-3"
                                />
                                <Card.Body className="text-center">
                                    <Card.Title>{product.sku}</Card.Title>
                                    <Card.Text>{product.name}</Card.Text>
                                    <Card.Text>{product.price}</Card.Text>
                                    <Card.Text>{product.weight}</Card.Text>
                                    <Card.Text>{product.dimension}</Card.Text>
                                    <Card.Text>{product.size}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default ProductList;