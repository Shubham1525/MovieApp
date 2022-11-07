import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/Interfaces/movie';
import { HomeService } from '../homepage/home.service';
import { Reviews } from './reviews';

@Component({
  selector: 'app-descrpage',
  templateUrl: './descrpage.component.html',
  styleUrls: ['./descrpage.component.css']
})
export class DescrpageComponent implements OnInit {

  movie: Movies = new Movies();
  id!: number;
  reviews : Reviews[] = []


  constructor(private router: Router, private route: ActivatedRoute, private connect: HomeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.connect.getMovieById(this.id).subscribe(data => {
      this.movie = data;
    });
    this.connect.getreview().subscribe(data=>{
      this.reviews=data;
    });
  }
  onsubmit(data:any){
    this.connect.insertreview(data);
  }

}
