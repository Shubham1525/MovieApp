import { Component,OnInit } from '@angular/core';
import { ConnectionService } from './connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MovieApp';
  movies : any[] | undefined;

  constructor(private connct : ConnectionService){
    this.connct.getmoviedata().subscribe((data: any)=>{
      this.movies = data;
    });
  }

  ngOnInit() : void{
    }

  }
