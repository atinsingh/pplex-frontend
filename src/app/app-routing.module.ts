import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  {
    path: '', component: HeroComponent
  },
  {
    path: 'customer', component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
