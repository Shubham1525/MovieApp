import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies, Reviews } from 'src/app/Interfaces/movie';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
 private baseUrl='http://localhost:8082/';
  
  constructor(private http:HttpClient) { }

  GetAllTrendingMovies():Observable<Movies[]>{
    return this.http.get<Movies[]>(this.baseUrl+"GetAllTrendingMovies");
  }

  getMovieById(id: number) : Observable<Movies>{
    return this.http.get<Movies>(`${this.baseUrl}details/${id}`);
  }
  insertreview(username:any,reviews:any){
    return this.http.post(`${this.baseUrl}addReview`,
    {"username": username,
    "reviews": reviews})
  }


  getreview():Observable<Reviews[]>{
    return this.http.get<Reviews[]>(`${this.baseUrl}getReviews`);
  }
}
