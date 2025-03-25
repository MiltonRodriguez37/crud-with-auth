import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb:FormBuilder, private router:Router){
    this.form = this.fb.group({
          user: ['', [Validators.required, Validators.minLength(4)]],
          password: ['', [Validators.required, Validators.minLength(6)]],
        });
  }

  goDashboard(){
    this.router.navigate(['/dashboard/users'])
  }

}
