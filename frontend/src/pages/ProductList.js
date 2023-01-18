import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ProductGrid from "../components/ProductGrid";

function ProductList() {
    const [checkedItems, setCheckedItems] = useState([]);
    const [products, setProducts] = useState([
        {
            sku: 'EE54657P',
            type: 'Book',
            name: 'Data Structures and Algorithms in Java',
            price: '$63.94',
            weight: 'Weight: 0.8kg'
        },
        {
            sku: 'EE54617S',
            type: 'Furniture',
            name: 'LISABO',
            price: '$179',
            dimension: 'Dimension: 50x30x20'
        },
        {
            sku: 'EE58657L',
            type: 'Disk',
            name: 'Windows 10 Home',
            price: '$99.99',
            size: '4000 MB'
        },
        {
            sku: 'EE24657L',
            type: 'Book',
            name: 'The Adventures of Tom Sawyer',
            price: '$16.69',
            weight: 'Weight: 0.5kg'
        }
    ]);

    const handleDelete = () => {
        // filter out the checked items from the products array
        const updatedProducts = products.filter(product => !checkedItems.includes(product.sku));
        // update the state with the new products array
        setCheckedItems([]);
        setProducts(updatedProducts);
    }

    return (
        <Container fluid className="page-container">
            <div className="inner-container">
                <div className="top-bar">
                    <h2>Product List</h2>
                    <div>
                        <Button variant="primary"
                                id="add-product-btn"
                                href="/add-product">Add new product</Button>{' '}
                        <Button variant="danger"
                                id="delete-product-btn"
                                form="product_list_form"
                                type="submit"
                                onClick={handleDelete}>Mass delete</Button>{' '}
                    </div>
                </div>
                <hr/>
                <ProductGrid
                    checkedItems={checkedItems}
                    setCheckedItems={setCheckedItems}
                    products={products}
                    setProducts={setProducts}
                />
            </div>
        </Container>
    );
}

export default ProductList;