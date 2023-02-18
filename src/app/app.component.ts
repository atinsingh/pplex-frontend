import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  name= 'Margie'
  searchCounter= 0;


  getName() {
    return this.name;
  }
  updateCount(cnt:any){
    this.searchCounter = cnt
    console.log(`Value of count in App Compont is ${cnt}`)
  }
}
