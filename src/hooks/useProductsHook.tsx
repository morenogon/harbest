import { useEffect } from 'react';

// fetch
import { fetchProducts } from '../helpers/fetchProducts';

// interfaces
import { Product } from '../interfaces/fetchProductsResponse';

export const useProductsHook = () => {
  // get harbest products only on first load
  useEffect(() => {
    fetchProducts().then((products: Product[]) => {
      console.log('Products');
      console.log(products);
    });
  }, [])
};
