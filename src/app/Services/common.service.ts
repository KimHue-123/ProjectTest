import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    public totalCustomer = 0;
    public totalCustomer$ = new BehaviorSubject<number>(0);
    constructor() { }
    public setTotalCustomer(total: number){
        this.totalCustomer = total;
        this.totalCustomer$.next(total);
        console.log("totalCustomer$: " + this.totalCustomer$);
    }

    public increaseTotalCustomer(){
        this.totalCustomer++;
        this.totalCustomer$.next(this.totalCustomer);
    }
}
