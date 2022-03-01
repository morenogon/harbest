import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './Home';
import ProductsList from './ProductsList';
import NotFoundPage from './NotFoundPage';

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
