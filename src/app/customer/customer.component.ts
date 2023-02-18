import { Component, OnInit } from '@angular/core';
import Customer from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService){

  }
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      data=>{
        this.customers = data;
      },
      error=>{
        console.log(error)
      }
    );
  }
  customers : Customer[] = [];
}
