import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    listUsers: User[] = [
      {name: 'Milton Osvaldo', lastname: 'Rodríguez González', gender: 'Femenino', telephone: '3315897034'},
      {name: 'Milton Osvaldo', lastname: 'Rodríguez González', gender: 'Femenino', telephone: '3315897034'},
      {name: 'Milton Osvaldo', lastname: 'Rodríguez González', gender: 'Femenino', telephone: '3315897034'},
    ];

  constructor() { }

  getUsers(){
    return this.listUsers.slice()
  }
}
