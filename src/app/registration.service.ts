import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private http: HttpClient) { }

  user: User | undefined;
  
  login(user:User):Observable<any> {
    return this.http.post<any>('http://localhost:8082/jwtauth', user);
  }
  
  register(user:User):Observable<any> {
    return this.http.post<any>('http://localhost:8082/register', user);
  }
}
