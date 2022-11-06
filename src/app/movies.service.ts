import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  baseUrl='http://localhost:8082'
  constructor(private http:HttpClient) { }

  getTrendingMovies(){
    return this.http.get(`${this.baseUrl}/GetAllTrendingMovies`)
  }
}
