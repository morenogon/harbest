import { useEffect } from 'react';

// fetch
import { fetchProducts } from '../helpers/fetchProducts';

// interfaces
import { Product } from '../interfaces/fetchProductsResponse';
import { useDispatch } from 'react-redux';
import { saveProduct } from '../features/productsSlice';

export const useProductsHook = () => {

  const dispatch = useDispatch();

  // get harbest products only on first load
  useEffect(() => {
    fetchProducts().then((products: Product[]) => {
      products.map((product: Product) => {
        dispatch(saveProduct(product));
      });
    });
  }, []);
};
