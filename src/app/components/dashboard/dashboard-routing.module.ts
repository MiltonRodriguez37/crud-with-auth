import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component: DashboardComponent, children:[
    {path:'', component: IndexComponent},
    {path:'users', component: UsersComponent},
    {path:'products', component: ProductsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
