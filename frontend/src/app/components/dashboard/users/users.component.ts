import { Component, ViewChild } from '@angular/core';
import { User } from '../../../interfaces/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  listUsers: User[] = [];
  displayedColumns: string[] = ['name', 'lastname', 'gender', 'telephone', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(private _userService: UserService, private toastr: ToastrService){}

ngOnInit():void{
  this.chargeUsers();
}

chargeUsers(){
  this._userService.getUsers().subscribe(data=>{
    console.log(data)
    this.listUsers = data;
    this.dataSource = new MatTableDataSource(this.listUsers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }, error => {
    console.log(error);
  }
  )
}

deleteUser(id:any){
  this._userService.deleteUser(id).subscribe(data=>{
    this.toastr.info('El usuario se eliminó correctamente', 'Usuario eliminado',{positionClass:'toast-bottom-center'});
    this.chargeUsers();
  },
error=>{
  this.toastr.error('El usuario no pudo eliminarse', 'Error',{positionClass:'toast-bottom-center'})
})
}

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
