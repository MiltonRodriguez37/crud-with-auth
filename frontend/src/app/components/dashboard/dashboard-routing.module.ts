import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { CreateProductComponent } from './products/create-product/create-product.component';

const routes: Routes = [
  {path:'',component: DashboardComponent, children:[
    {path:'', component: IndexComponent},
    {path:'users', component: UsersComponent},
    {path:'products', component: ProductsComponent},
    {path:'create-user',component: CreateUserComponent},
    {path: 'create-product', component: CreateProductComponent},
    {path: 'edit-product/:id', component: CreateProductComponent},
    {path: 'edit-user/:id', component: CreateUserComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
