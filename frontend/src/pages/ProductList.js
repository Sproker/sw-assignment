import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const products = [
    {
        sku: '555300',
        name: 'Product 1',
        price: '$9.99',
        weight: '40kg'
    },
    {
        sku: '52300',
        name: 'Product 2',
        price: '$19.99',
        dimension: '40x30x20'
    },
    {
        sku: '5524300',
        name: 'Product 3',
        price: '$29.99',
        dimension: '40x40x20'
    },
    {
        sku: '55s4300',
        name: 'Product 4',
        price: '$29.99',
        dimension: '40x40x20'
    },
    {
        sku: '55s4300',
        name: 'Product 5',
        price: '$29.99',
        dimension: '40x40x20'
    },

];

function ProductList() {
    return (
        <Container>
            <Form className="mt-5">
                <Row>
                    {products.map((product, index) => (
                        <Col key={index} xs={6} sm={6} md={4} lg={3} className="d-flex mb-3">
                            <Card style={{ width: '18rem' }}>
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
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Form>
        </Container>
    );
}

export default ProductList;