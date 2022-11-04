import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/Interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 private baseUrl='https://localhost:8082/GetAllTrendingMovies';
  
  constructor(private http:HttpClient) { }

  GetAllTrendingMovies():Observable<Movies[]>{
    return this.http.get<Movies[]>(this.baseUrl);
  }
}