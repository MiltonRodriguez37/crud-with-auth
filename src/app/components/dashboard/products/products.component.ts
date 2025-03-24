import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../../../services/user.service';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  listProducts: Product[] = [];
  displayedColumns: string[] = ['product', 'description', 'category', 'price', 'stock', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(private _productService: ProductService){}

ngOnInit():void{
  this.chargeUsers();
}

chargeUsers(){
  this.listProducts = this._productService.getProducts()
  this.dataSource = new MatTableDataSource(this.listProducts);
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
