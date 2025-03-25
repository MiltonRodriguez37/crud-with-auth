import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  title = 'Crear Producto';
  form: FormGroup;
  idProduct: string|null;

  constructor(private fb:FormBuilder, private router:Router, private toastr: ToastrService, private _productService:ProductService, private aRouter:ActivatedRoute){
    this.form = this.fb.group({
      product: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      stock: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });
    this.idProduct = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit():void{
    this.isEdit();
  }

  addProduct(){

    const PRODUCT: Product = {
      product: this.form.get('product')?.value,
      description: this.form.get('description')?.value,
      category:  this.form.get('category')?.value,
      price:  this.form.get('price')?.value,
      stock:  this.form.get('stock')?.value,

    };

    if(this.idProduct!==null){
      this._productService.editProduct(this.idProduct,PRODUCT).subscribe(data=>{
        this.toastr.success('El producto se modificó con éxito.', 'Producto editado!',{positionClass:'toast-bottom-center'});
        this.router.navigate(['/dashboard/products'])
      },error=>{
        this.toastr.error('No se pudo modificar el producto.', 'Error!',{positionClass:'toast-bottom-center'});
      })
    } else{
      this._productService.saveProduct(PRODUCT).subscribe(data=>{
        this.toastr.success('El registro del producto fue exitoso.', 'Producto registrado!',{positionClass:'toast-bottom-center'});
        this.router.navigate(['/dashboard/products'])
      },error=>{
        this.toastr.error('No se pudo registrar el producto.', 'Error!',{positionClass:'toast-bottom-center'});
      })
    }

    console.log(PRODUCT);
  }

  isEdit(){
    if(this.idProduct!==null){
      this.title = 'Editar Producto'
      this._productService.getProduct(this.idProduct).subscribe(data=>{
        this.form.setValue({
          product: data.product,
          description: data.description,
          category:  data.category,
          price:  data.price,
          stock: data.stock
        })
      })
    }
  }

}
