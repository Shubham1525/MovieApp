import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies, Reviews } from 'src/app/Interfaces/movie';
import { HomeService } from '../homepage/home.service';

@Component({
  selector: 'app-descrpage',
  templateUrl: './descrpage.component.html',
  styleUrls: ['./descrpage.component.css']
})
export class DescrpageComponent implements OnInit {

  movie: Movies = new Movies();
  
  id!: number;
  reviews: Reviews[] = []

  reviewForm!: FormGroup


  constructor(private router: Router, private route: ActivatedRoute, private connect: HomeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.connect.getMovieById(this.id).subscribe(data => {
      this.movie = data;
    });
    this.connect.getreview().subscribe(data => {
      this.reviews = data;
    });

    this.reviewForm = this.fb.group({
      username: ['', [Validators.required]],
      reviews: ['', [Validators.required]],
    });
  }
  onReview(formGroup: FormGroup) {
    this.connect.insertreview(formGroup.value.username, formGroup.value.reviews).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err) => console.log(err)
    });
  }
}

