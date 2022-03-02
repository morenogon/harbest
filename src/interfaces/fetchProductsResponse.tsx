
export interface FetchProductsResponse {
    totalCount: number;
    list: ProductsList[];
}
export interface TransformProductsResponse {
    totalCount: number;
    list: Product[];
}

export interface ProductsList {
    _id: string;
    name: string;
    description: string;
    active: boolean;
    price: number;
    SKU: string;
    __v: number;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    active: boolean;
}
