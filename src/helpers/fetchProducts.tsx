import { useContext } from "react";
import { harbestProductsApi } from "../api/harbestApi"
import { PaginationContext } from "../context/paginationContext";

// interfaces
import { FetchProductsResponse, Product, ProductsList, TransformProductsResponse } from "../interfaces/fetchProductsResponse";

export const fetchProducts = async (currentPage: number): Promise<TransformProductsResponse> => {
    const res = await harbestProductsApi.get<FetchProductsResponse>(`/?page=${currentPage}&itemsPerPage=5&active=true`);

    return {
        totalCount: res.data.totalCount,
        list: transformProducts(res.data.list)
    }
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