import {Card, Col, Row} from "react-bootstrap";

function GetProducts() {

    const products = [

        {
            sku: '555300',
            type: 'Book',
            name: 'Product 1',
            price: '$9.99',
            weight: 'Weight: 4kg'
        },
        {
            sku: '52300',
            type: 'furniture',
            name: 'Product 2',
            price: '$19.99',
            dimension: 'Dimension: 40x30x20'
        },
        {
            sku: '5524300',
            type: 'furniture',
            name: 'Product 3',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: '55s4300',
            type: 'furniture',
            name: 'Product 4',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: '55s4300',
            type: 'furniture',
            name: 'Product 5',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: '55s4300',
            type: 'furniture',
            name: 'Product 6',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: '55s4300',
            type: 'furniture',
            name: 'Product 7',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: 'J55s4300z',
            type: 'furniture',
            name: 'Table',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: '55s4300',
            type: 'furniture',
            name: 'Product 5',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: '55s4300',
            type: 'furniture',
            name: 'Product 6',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: '55s4300',
            type: 'furniture',
            name: 'Product 7',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: 'J55s4300z',
            type: 'furniture',
            name: 'Table',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: '55s4300',
            type: 'furniture',
            name: 'Product 6',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: '55s4300',
            type: 'furniture',
            name: 'Product 7',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: 'J55s4300z',
            type: 'furniture',
            name: 'Table',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: '55s4300',
            type: 'furniture',
            name: 'Product 6',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: '55s4300',
            type: 'furniture',
            name: 'Product 7',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },
        {
            sku: 'J55s4300z',
            type: 'furniture',
            name: 'Table',
            price: '$29.99',
            dimension: 'Dimension: 40x40x20'
        },

    ];

    return (
        <Row className="grid g-4" xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
            {products.map((product, index) => (
                <Col key={index}
                     className="d-flex justify-content-center">
                    <Card>
                        <Card.Header className="card-header text-muted">
                                <input
                                    type="checkbox"
                                    //checked={checked}
                                    className="delete-checkbox"
                                />
                            {product.type}
                        </Card.Header>
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
    );
}

export default GetProducts;