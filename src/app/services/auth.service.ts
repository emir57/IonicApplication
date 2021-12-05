import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://reqres.in/api"
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }
  isLogin=false;

  login(loginModel:LoginModel):Observable<any>{
    let newPath = `${this.apiUrl}/login`;
    return this.http.post(newPath,loginModel);
  }
  register(registerModel:RegisterModel):Observable<any>{
    let newPath = `${this.apiUrl}/register`;
    return this.http.post(newPath,registerModel)
  }

  isAuthenticated(){
    return this.isLogin;
  }

  logout(){
    this.isLogin=false;
    this.router.navigate(['login'])
  }
}
