import axios from 'axios';

// Configure axios baseUrl
export const harbestProductsApi = axios.create({
    baseURL: 'http://localhost:9000/products'
});
