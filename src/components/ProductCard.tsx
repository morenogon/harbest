import { Product } from '../interfaces/fetchProductsResponse'

const ProductCard = ({ name, description, price, active }: Product) => {
    return (
        <div className='productCard'>
            <p>{name}</p>
        </div>
    )
}

export default ProductCard