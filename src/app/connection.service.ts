import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http:HttpClient) { }

  getmoviedata(){
    let url = "http://jsonplaceholder.typicode.com/photos"
    return this.http.get(url);
  }
}
