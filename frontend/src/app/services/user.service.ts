import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8080/api/users/';
/*     listUsers: User[] = [
      {name: 'Milton Osvaldo', lastname: 'Rodríguez González', gender: 'Femenino', telephone: '3315897034'},
      {name: 'Milton Osvaldo', lastname: 'Rodríguez González', gender: 'Femenino', telephone: '3315897034'},
      {name: 'Milton Osvaldo', lastname: 'Rodríguez González', gender: 'Femenino', telephone: '3315897034'},
    ]; */

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(this.url);
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete(this.url+id);
  }

  saveUser(user:User):Observable<any>{
    return this.http.post(this.url,user);
  }

  getUser(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  editUser(id:string,user:User):Observable<any>{
    return this.http.put(this.url+id,user)
  }
}
