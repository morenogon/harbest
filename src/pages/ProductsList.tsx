import { useDispatch } from 'react-redux';
import { saveProduct } from '../features/productsSlice';
import ProductCard from '../components/ProductCard';
import { Product, TransformProductsResponse } from '../interfaces/fetchProductsResponse';
import { useState, useEffect } from 'react';
import { fetchProducts } from '../helpers/fetchProducts';

const ProductsList = () => {

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [maxPages, setMaxPages] = useState(0);
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts(currentPage).then((products: TransformProductsResponse) => {
      products.list.map((product: Product) => {
        dispatch(saveProduct(product));
      });

      setProductsList(products.list);
      setMaxPages(calculateMaxPages(products.totalCount, 5));
    });
  }, [currentPage, maxPages]);

  const calculateMaxPages = (totalCount: number, itemsPerPage: number): number => {
    return Math.ceil(totalCount / itemsPerPage);
  }

  const updateCurrentPage = (type: string) => {
    switch (type) {
      case 'increment':
        setCurrentPage(currentPage + 1);
        break;
      case 'decrement':
        setCurrentPage(currentPage - 1);
        break;
      default:
        setCurrentPage(currentPage)
        break;
    }
  };

  return (
    <div className='productsList'>
      {productsList && productsList.map((product: Product) => <ProductCard key={product.id} id={product.id} description={product.description} name={product.name} price={product.price} active={product.active} />)};
      {/* move to new component */}
      {currentPage > 0 ? (
        <button onClick={() => updateCurrentPage('decrement')}>Prev</button>
      ) : null}
      {currentPage < maxPages ? (
        <button onClick={() => updateCurrentPage('increment')}>Next</button>
      ) : null}
    </div >
  )
}

export default ProductsList;