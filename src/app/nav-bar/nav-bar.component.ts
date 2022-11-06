import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  public loggedIn=false;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.loggedIn=this.authservice.isLoggedIn()
  }
logoutUser(){
  this.authservice.logout()
  location.reload()
}
}
