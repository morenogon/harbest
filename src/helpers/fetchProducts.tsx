import { harbestProductsApi } from "../api/harbestApi"

// interfaces
import { FetchProductsResponse, Product, ProductsList } from "../interfaces/fetchProductsResponse";

export const fetchProducts = async (): Promise<Product[]> => {

    const res = await harbestProductsApi.get<FetchProductsResponse>('/?page=0&itemsPerPage=5&active=true');

    return transformProducts(res.data.list);
};

const transformProducts = (productsList: ProductsList[]): Product[] => {

    const newProductsList: Product[] = productsList.map((product: ProductsList) => {
        return {
            id: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            active: product.active
        }
    });

    return newProductsList;
}