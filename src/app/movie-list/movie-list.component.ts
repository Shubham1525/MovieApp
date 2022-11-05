import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies : Movies[] | undefined;

  constructor(private connct : ConnectionService, private router: Router) {
    this.connct.getmoviedata().subscribe((data: any)=>{
      this.movies = data;
    });
   }

  ngOnInit(): void {
  }

  descrmovie(id: number){
    this.router.navigate(['descrpage', id]);
  }

}
