export interface BookInterface{
    id: number;
    name: string;
    idCategory: string;
    author: string;
    idPublisher: string;
    currentQuantity: number;
    image: string;
    price: number;
    salePrice: number;
    content: string;
}

export class Book implements BookInterface{
    id: number;
    name: string;
    idCategory: string;
    author: string;
    idPublisher: string;
    currentQuantity: number;
    image: string;
    price: number;
    salePrice: number;
    content: string;
}