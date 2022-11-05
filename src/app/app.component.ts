import { Component,OnInit } from '@angular/core';
import { ConnectionService } from './connection.service';
import { Router } from '@angular/router';
import { Movies } from './movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MovieApp';
  movies : Movies[] | undefined;

  constructor(private connct : ConnectionService, private router: Router){
    this.connct.getmoviedata().subscribe((data: any)=>{
      this.movies = data;
    });
  }

  ngOnInit() : void{
    }

  descrmovie(id: number){
    this.router.navigate(['descrpage', id]);
  }
  }
