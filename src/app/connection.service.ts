import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from './movies';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  movies : Movies[] | undefined;
  private url = "http://localhost:8082"
  constructor(private http:HttpClient) { }

  getmoviedata(){
    return this.http.get(`${this.url}/GetAllTrendingMovies`);
  }

  getMovieById(id: number) : Observable<Movies>{
    return this.http.get<Movies>(`${this.url}/details/${id}`);
  }

  }
