import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Customer from "../models/customer.model";

@Injectable({
    providedIn:'root'
})
export class CustomerService {
    constructor(private http: HttpClient){

    }
    getCustomers(): Observable<Customer[]> {
       return this.http.get<Customer[]>('http://localhost:9090/api/customer')
      
    }
}