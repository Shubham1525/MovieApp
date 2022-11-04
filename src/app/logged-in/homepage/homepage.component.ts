import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/Interfaces/movie';
import { NewService } from '../new.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title = 'MovieApp';
  movies : Movies[]=[];

  constructor(private homeService:NewService) { }

  ngOnInit(): void {
    this.homeService.GetAllTrendingMovies().subscribe(data=>
      this.movies=data);
  }

}
