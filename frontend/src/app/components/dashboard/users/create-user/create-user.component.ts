import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  title = 'Crear Usuario'
  form: FormGroup;
  idUser:string|null;

  constructor(private fb:FormBuilder, private router:Router, private toastr: ToastrService, private aRouter:ActivatedRoute, private _userService:UserService){
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', [Validators.required]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]]
    });
    this.idUser = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit():void{
    this.isEdit();
  }

  addUser(){

    const USER: User = {
      name: this.form.get('name')?.value,
      lastname: this.form.get('lastname')?.value,
      gender:  this.form.get('gender')?.value,
      telephone:  this.form.get('telephone')?.value,

    };

    if(this.idUser!==null){
      this._userService.editUser(this.idUser,USER).subscribe(data=>{
        this.toastr.success('El usuario se modificó con éxito.', 'Usuario editado!',{positionClass:'toast-bottom-center'});
        this.router.navigate(['/dashboard/users'])
      },error=>{
        this.toastr.error('No se pudo modificar el usuario.', 'Error!',{positionClass:'toast-bottom-center'});
      })
    }else{
      this._userService.saveUser(USER).subscribe(data=>{
        this.toastr.success('El registro del usuario fue exitoso.', 'Usuario registrado!',{positionClass:'toast-bottom-center'});
        this.router.navigate(['/dashboard/users']);
      },
      error=>{
        this.toastr.error('No se pudo crear el usuario.', 'Error!',{positionClass:'toast-bottom-center'});
      })
    }
    console.log(USER);

  }

  isEdit(){
    if(this.idUser!==null){
      this.title = 'Editar Usuario'
      this._userService.getUser(this.idUser).subscribe(data=>{
        this.form.setValue({
          name: data.name,
          lastname: data.lastname,
          gender:  data.gender,
          telephone:  data.telephone
        })
      })
    }
  }
}
