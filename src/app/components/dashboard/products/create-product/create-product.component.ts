import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  form: FormGroup;

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      product: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      stock: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    })
  }

  addProduct(){
    console.log(this.form)
  }
}
