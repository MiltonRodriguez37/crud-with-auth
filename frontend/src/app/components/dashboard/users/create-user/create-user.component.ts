import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../interfaces/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  form: FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private toastr: ToastrService){
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', [Validators.required]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]]
    })
  }

  addUser(){

    const USER: User = {
      name: this.form.get('name')?.value,
      lastname: this.form.get('lastname')?.value,
      gender:  this.form.get('gender')?.value,
      telephone:  this.form.get('telephone')?.value,

    };
    console.log(USER);
    this.toastr.success('El registro del usuario fue exitoso.', 'Usuario registrado!',{positionClass:'toast-bottom-center'});
    this.router.navigate(['/dashboard/users']);

  }
}
