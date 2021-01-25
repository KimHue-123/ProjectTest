export interface PublisherInterface{
    id: number;
    name: string;
    address: string;
}

export class Publisher implements PublisherInterface{
    id: number;
    name: string;
    address: string;
}