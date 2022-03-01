import { useProductsHook } from '../hooks/useProductsHook';
import { useSelector } from 'react-redux';
import { selectProductsList } from '../features/productsSlice';
import ProductCard from '../components/ProductCard';
import { Product } from '../interfaces/fetchProductsResponse';

const ProductsList = () => {

  useProductsHook();
  const productsList = useSelector(selectProductsList);

  return (
    <div className='productsList'>
      {productsList && productsList.map((product: Product) => <ProductCard key={product.id} id={product.id} description={product.description} name={product.name} price={product.price} active={product.active} />)};
    </div>
  )
}

export default ProductsList;