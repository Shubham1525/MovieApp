import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: RegistrationService, private router: Router) { }
  user= new User();
  msg='';

  ngOnInit(): void {
  }

  loginUser() {
    this.service.login(this.user).subscribe({
      next : (res) => console.log(res),
      error : (err) => this.msg="Invalid Credentials. Please enter valid credentials",
      complete: () => this.router.navigate(['/movie-list'])
      } 
      
    )
  }

  registerUser() {
    this.service.login(this.user).subscribe({
      next : (res) => console.log(res),
      error : (err) => this.msg="Registration unsuccessfull",
      complete: () => this.router.navigate(['/movie-list'])
      } 
    )
  }
}
