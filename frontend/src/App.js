import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Navbar from './components/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route exact path='/' element={<ProductList />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;