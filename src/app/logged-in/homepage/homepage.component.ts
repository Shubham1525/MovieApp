import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/Interfaces/movie';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title = 'MovieApp';
  movies : Movies[]=[];

  constructor(private homeService:HomeService, private router: Router) { }

  ngOnInit(): void {
    this.homeService.GetAllTrendingMovies().subscribe(data=>
      this.movies=data);
  }

  descrmovie(id: number){
    this.router.navigate(['loggedIn/descrpage', id]);
  }

}
