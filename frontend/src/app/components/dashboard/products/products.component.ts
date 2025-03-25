import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  listProducts: Product[] = [];
  displayedColumns: string[] = ['product', 'description', 'category', 'price', 'stock', 'actions'];
  dataSource!: MatTableDataSource<any>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(private _productService: ProductService, private toastr:ToastrService){}

ngOnInit():void{
  this.chargeProducts();
}

chargeProducts(){
  this.isLoading = true;
  this._productService.getProducts().subscribe(data=>{
    console.log(data);
    this.listProducts = data;
    this.dataSource = new MatTableDataSource(this.listProducts);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.isLoading = false;
  }, error => {
    this.isLoading = false;
    console.log(error);
  }
)
}

deleteProduct(id:any){
  this.isLoading = true;
  this._productService.deleteProduct(id).subscribe(data=>{
    this.toastr.info('El producto se eliminó correctamente', 'Producto eliminado',{positionClass:'toast-bottom-center'});
    this.chargeProducts();
  },
error=>{
  this.isLoading = false;
  this.toastr.error('El producto no pudo eliminarse', 'Error',{positionClass:'toast-bottom-center'})
})
}

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
