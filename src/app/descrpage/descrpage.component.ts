import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Movies } from '../movies';

@Component({
  selector: 'app-descrpage',
  templateUrl: './descrpage.component.html',
  styleUrls: ['./descrpage.component.css']
})
export class DescrpageComponent implements OnInit {

  movie: Movies = new Movies();
  id!: number;

  constructor(private connect: ConnectionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.connect.getMovieById(this.id).subscribe(data => {
      this.movie = data;
    });
  }

}
