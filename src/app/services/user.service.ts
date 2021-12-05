import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDataModel } from '../models/responseDataModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = "https://reqres.in/api"

  constructor(
    private http:HttpClient
  ) { }

  getUsers(page:number):Observable<ResponseDataModel<User>>{
    let newPath = `${this.URL}/users?page=${page}`;
    return this.http.get<ResponseDataModel<User>>(newPath);
  }
}
