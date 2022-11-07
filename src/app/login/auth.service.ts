import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://localhost:8082"
  constructor(private http:HttpClient,private router:Router) { }

  login(username:any,password:any){
    return this.http.post(`${this.url}/authenticate`,
    {"username": username,
    "password": password})
  }

  register(username:any,password:any,email:any){
    return this.http.post(`${this.url}/register`,
    {"username": username,
    "password": password,
    "email":email})
  }

  //for login user
  loginUser(token:any){
    localStorage.setItem("token",token)
    return true;
  }
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined||token==''||token==null){
      return false;
    }
    else{
      return true;
    }
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
    return true;
  }
  getToken(){
    return localStorage.getItem("token");
  }
}
