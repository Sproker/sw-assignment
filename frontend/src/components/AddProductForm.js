import Form from 'react-bootstrap/Form';

function AddProductForm() {
    return (
        <Form id="product_form">
            <Form.Group className="mb-3" controlId="sku">
                <Form.Label>SKU:</Form.Label>
                <Form.Control type="text" placeholder="Enter product SKU" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price:</Form.Label>
                <Form.Control type="text" placeholder="Enter product price ($)" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="productType">
                <Form.Label>Type Switcher</Form.Label>
                <Form.Select aria-label="Default select example" required>
                    <option>Select product type</option>
                    <option value="1">DVD</option>
                    <option value="2">Book</option>
                    <option value="3">Furniture</option>
                </Form.Select>
                {/*<Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>*/}
            </Form.Group>
        </Form>
    );
}

export default AddProductForm;