import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { CreateUserComponent } from './users/create-user/create-user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    IndexComponent,
    ProductsComponent,
    UsersComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class DashboardModule { }
