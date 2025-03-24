import { Component, ViewChild } from '@angular/core';
import { User } from '../../../interfaces/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  listUsers: User[] = [];
  displayedColumns: string[] = ['user', 'name', 'lastname', 'gender', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(private _userService: UserService){}

ngOnInit():void{
  this.chargeUsers();
}

chargeUsers(){
  this.listUsers = this._userService.getUsers()
  this.dataSource = new MatTableDataSource(this.listUsers);
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
