import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: user
  constructor(private http : HttpClient) { }

  loginUser(user : user) : Observable<user>{
    return this.http.put<user>('http://localhost:'+ user.id,user)

  }


}
