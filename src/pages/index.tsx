/* eslint-disable no-fallthrough */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './Home';
import ProductsList from './ProductsList';
import NotFoundPage from './NotFoundPage';
import { useState, useEffect } from 'react';
import { PaginationContext } from '../context/paginationContext';
import { useProductsHook } from '../hooks/useProductsHook';

const WebPages = () => {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>

    );
};

export default WebPages;
