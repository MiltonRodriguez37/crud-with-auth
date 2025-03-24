import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    listUsers: User[] = [
      {user: 'milton37', name: 'Milton Osvaldo', lastname: 'Rodríguez González', gender: 'Hombre'},
      {user: 'milton37', name: 'Milton Osvaldo', lastname: 'Rodríguez González', gender: 'Hombre'},
      {user: 'milton37', name: 'Milton Osvaldo', lastname: 'Rodríguez González', gender: 'Femenino'},
    ];

  constructor() { }

  getUsers(){
    return this.listUsers.slice()
  }
}
