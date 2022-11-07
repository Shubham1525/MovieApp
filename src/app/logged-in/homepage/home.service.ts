import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/Interfaces/movie';
import { Reviews } from '../descrpage/reviews';

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
    return this.http.get<Movies>(`${this.baseUrl}/${id}`);
  }
  insertreview(data:any){
    //const headers = {'Content-Type':'application/json'};
    this.http.post(this.baseUrl,data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
  }

  getreview():Observable<Reviews[]>{
    return this.http.get<Reviews[]>(this.baseUrl);

  }
}
