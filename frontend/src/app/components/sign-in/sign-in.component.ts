import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  form: FormGroup;



  constructor(private fb:FormBuilder, private router:Router, private toastr:ToastrService){
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      user: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordAgain: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.form.valueChanges.subscribe(() => {
      if (this.form.get('password')?.value !== this.form.get('passwordAgain')?.value) {
        this.form.get('passwordAgain')?.setErrors({ mismatch: true });
      } else {
        this.form.get('passwordAgain')?.setErrors(null);
      }
    });
  }

  goLogin(){
    this.toastr.success('El usuario se creó con éxito.', 'Usuario creado!',{positionClass:'toast-bottom-center'});
    this.router.navigate(['/dashboard/login'])

  }

}
