import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';

function AddProductForm() {
    const [productType, setProductType] = useState('DVD');
    const schema = yup.object().shape({
        sku: yup.string()
            .min(8, 'SKU is too short')
            .max(12, 'SKU is too long')
            .required('Please, submit product stock keeping unit'),
        name: yup.string()
            .required('Please, submit product name'),
        price: yup.number()
            .required('Please, submit product price')
            .typeError('Price must be a number'),
        size: yup.number()
            .min(2, 'Disk size is too small')
            .max(6, 'Disk size is too big')
            .required('Please, submit product size')
            .typeError('Size must be a number in MB'),
        height: yup.number()
            .min(2, 'Product height is too small')
            .max(4, 'Product height is too big')
            .required('Please, submit product height')
            .typeError('Height must be a number'),
        width: yup.number()
            .min(2, 'Product width is too small')
            .max(4, 'Product width is too big')
            .required('Please, submit product width')
            .typeError('Width must be a number'),
        length: yup.number()
            .min(2, 'Product length is too small')
            .max(4, 'Product length is too big')
            .required('Please, submit product length')
            .typeError('Length must be a number'),
        weight: yup.number()
            .max(2, 'Product is too heavy')
            .required('Please, submit product weight')
            .typeError('Length must be a number')
    });

    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
                sku: '',
                name: '',
                price: '',
                size: '',
                height: '',
                width: '',
                length: '',
                weight: ''
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  values,
                  errors,
              }) => (

                <Form id="add_product_form" onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label>SKU:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product sku"
                            id="sku"
                            name="sku"
                            value={values.sku || ''}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.sku}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product name"
                            id="name"
                            name="name"
                            value={values.name || ''}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Price:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product price ($)"
                            id="price"
                            name="price"
                            value={values.price || ''}
                            onChange={handleChange}
                            isInvalid={!!errors.price}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.price}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" id="productType">
                        <Form.Label>Select product type:</Form.Label>
                        <Form.Select aria-label="Product type switcher"
                                     value={productType}
                                     onChange={e => setProductType(e.target.value)}
                        >
                            <option value="DVD">DVD</option>
                            <option value="Book">Book</option>
                            <option value="Furniture">Furniture</option>
                        </Form.Select>
                    </Form.Group>

                    {productType === 'DVD' ? (

                        <Form.Group id="dvd">
                            <Form.Label>Size:</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Enter size (MB)"
                                          id="size"
                                          name="size"
                                          value={values.size || ''}
                                          onChange={handleChange}
                                          isInvalid={!!errors.size}
                            />
                            <Form.Control.Feedback type="invalid" className="mb-3">
                                {errors.size}
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                Provide disk capacity in megabytes
                            </Form.Text>
                        </Form.Group>

                    ) : productType === 'Furniture' ? (

                        <Form.Group id="furniture">
                            <Form.Label className="mt-3">Height:</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Enter height (CM)"
                                          id="height"
                                          name="height"
                                          value={values.height || ''}
                                          onChange={handleChange}
                                          isInvalid={!!errors.height}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.height}
                            </Form.Control.Feedback>

                            <Form.Label className="mt-3">Width:</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Enter width (CM)"
                                          id="width"
                                          name="width"
                                          value={values.width || ''}
                                          onChange={handleChange}
                                          isInvalid={!!errors.width}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.width}
                            </Form.Control.Feedback>

                            <Form.Label className="mt-3">Length:</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Enter length (CM)"
                                          id="length"
                                          name="length"
                                          value={values.length || ''}
                                          onChange={handleChange}
                                          isInvalid={!!errors.length}
                            />
                            <Form.Control.Feedback type="invalid" className="mb-3">
                                {errors.length}
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                Provide furniture dimensions in centimeters
                            </Form.Text>
                        </Form.Group>

                    ) : (

                        <Form.Group id="book">
                            <Form.Label>Weight:</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Enter weight (kg)"
                                          id="weight"
                                          name="weight"
                                          value={values.weight || ''}
                                          onChange={handleChange}
                                          isInvalid={!!errors.weight}
                            />
                            <Form.Control.Feedback type="invalid" className="mb-3">
                                {errors.weight}
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                Provide book weight in kilograms
                            </Form.Text>
                        </Form.Group>
                    )}
                </Form>
            )}
        </Formik>
    );
}

export default AddProductForm;