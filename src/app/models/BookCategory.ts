export interface BookCategoryInterface{
    id: number;
    category: string;
    topic: string;
}

export class BookCategory implements BookCategoryInterface{
    id: number;
    category: string;
    topic: string;
}