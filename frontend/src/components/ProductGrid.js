import {Card, Col, Form, Row} from "react-bootstrap";

function ProductGrid({checkedItems, setCheckedItems, products}) {
    const handleCheckboxClick = (e, sku) => {
        if (e.target.checked) {
            setCheckedItems([...checkedItems, sku]);
        } else {
            setCheckedItems(checkedItems.filter(item => item !== sku));
        }
    }

    return (
        <Form id="product_list_form">
            <Row className="grid g-4" xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
                {products.map((product, index) => (
                    <Col key={index}
                         className="d-flex justify-content-center">
                        <Card bg="light">
                            <Card.Header className="card-header text-muted">
                                <Form.Check
                                    type="checkbox"
                                    className='delete-checkbox'
                                    onClick={e => handleCheckboxClick(e, product.sku)}
                                >
                                </Form.Check>
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
        </Form>
    );
}

export default ProductGrid;