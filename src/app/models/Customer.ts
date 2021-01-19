export interface CustomerInterface{
    id: number;
    name: string;
    sex: string;
    address: string;
    score: number;
    phoneNumber: string;
}

export class Customer implements CustomerInterface{
    id: number ;
    name: string = '';
    sex: string = '';
    address: string = '';
    score: number = 0;
    phoneNumber: string ='';
}