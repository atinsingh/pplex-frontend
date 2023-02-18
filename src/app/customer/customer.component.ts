import { Component } from '@angular/core';
import Customer from '../models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customers : Customer[] =[
      {
        id: 1,
        firstName:'Puspinder',
        lastName: 'Singh',
        email: 'pushpinder@gmail.com',
        phone: '12345666233',
        login:'catmeatpplux'
      },
      {
        id: 1,
        firstName:'Andrew',
        lastName: 'Disola',
        email: 'andrew@gmail.com',
        phone: '83733672',
        login:'catmeatpplux'
      }
  ]
}
