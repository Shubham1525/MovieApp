import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }

  logoutUser(){
    this.authservice.logout()
   
  }
}
