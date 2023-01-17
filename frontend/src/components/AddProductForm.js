import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function AddProductForm() {
    const [productType, setProductType] = useState('DVD');

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

            <Form.Group className="mb-4" controlId="productType">
                <Form.Label>Type Switcher</Form.Label>
                <Form.Select aria-label="Product type switcher"
                             value={productType}
                             onChange={e => setProductType(e.target.value)}
                             required
                >
                    <option value="DVD">DVD</option>
                    <option value="Book">Book</option>
                    <option value="Furniture">Furniture</option>
                </Form.Select>
            </Form.Group>

                {productType === 'DVD' ? (
                    <Form.Group controlId="dvd">
                        <Form.Label>Size:</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter size (MB)"
                                      id="size"
                                      required/>
                        <Form.Text className="text-muted">
                            Please, provide size
                        </Form.Text>
                    </Form.Group>
                ) : productType === 'Furniture' ? (
                    <Form.Group controlId="furniture">

                        <Form.Label>Height:</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter height (CM)"
                                      id="height"
                                      className="mb-3"
                                      required
                        />
                        <Form.Label>Width:</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter width (CM)"
                                      id="width"
                                      className="mb-3"
                                      required
                        />
                        <Form.Label>Length:</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter length (CM)"
                                      id="length"
                                      className="mb-3"
                                      required
                        />
                        <Form.Text className="text-muted">
                            Please, provide dimensions
                        </Form.Text>
                    </Form.Group>
                ) : (
                    <Form.Group controlId="book">
                        <Form.Label>Weight:</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter weight (kg)"
                                      id="weight"
                                      required
                        />
                        <Form.Text className="text-muted">
                            Please, provide weight
                        </Form.Text>
                    </Form.Group>
                )}

        </Form>

    );

}

export default AddProductForm;