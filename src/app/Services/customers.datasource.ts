import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import {catchError, finalize} from "rxjs/operators";
import { Customer } from "../models/Customer";
import { CustomerService } from "./customer.service";



export class CustomersDataSource implements DataSource<Customer> {

    private listCustomers = new BehaviorSubject<Customer[]>([]);
    private loadingCustomer = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingCustomer.asObservable();

    constructor(private httpService: CustomerService) {

    }

    loadCustomers(courseId:number,
                filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingCustomer.next(true);

        this.httpService.findLessons(courseId, filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingCustomer.next(false))
            )
            .subscribe(lessons=> this.listCustomers.next(lessons));

    }

    connect(collectionViewer: CollectionViewer): Observable<Customer[]> {
        console.log("Connecting data source");
        return this.listCustomers.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.listCustomers.complete();
        this.loadingCustomer.complete();
    }

}