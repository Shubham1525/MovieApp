import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private moviesservice:MoviesService) { }

  ngOnInit(): void {
  }
  getTrendingMovies(){
    this.moviesservice.getTrendingMovies().subscribe(
      movie=>{
        console.log(movie);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
