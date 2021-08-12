import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URLMotoristas = "http://localhost:8888/motoristas";

  constructor(private http: HttpClient, private router: Router) { }

  login(motorista:any){
    return this.http.post<any>(this.URLMotoristas+'/login', motorista);
  }

  loggedIn():Boolean{
    if (localStorage.getItem('token')){
      return true
    }
    else{
      return false
    }
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
