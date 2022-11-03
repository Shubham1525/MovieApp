import { Component,OnInit } from '@angular/core';
import { ConnectionService } from './connection.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MovieApp';
  movies : any[] | undefined;

  constructor(private connct : ConnectionService , private toastr : ToastrService){
    this.connct.getmoviedata().subscribe((data: any)=>{
      this.movies = data;
    });
  }

  ngOnInit() : void{
    }

    showToastr(){
      this.toastr.success('Movie added to the favourites');
    }

    

  }
