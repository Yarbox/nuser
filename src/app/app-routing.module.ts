import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPostPackComponent } from './order-post-pack/order-post-pack.component';

const routes: Routes = [
  {path:"post-order",component:OrderPostPackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
