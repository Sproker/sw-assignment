import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className="content">
            <Navbar />
                <Routes>
                    <Route exact path='/' element = { <ProductList /> } />
                    <Route path='/add' element = { <AddProduct /> } />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;