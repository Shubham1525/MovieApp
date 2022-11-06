import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    username:'',
    password:''
  }

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("successful login");
    if((this.credentials.username!=''&&this.credentials.password!='')&&(this.credentials.username!=null && this.credentials.password!=null)){
    console.log("submit form to server");
    this.authservice.generateToken(this.credentials).subscribe(
      (response:any)=>{
             console.log(response.token);
             this.authservice.loginUser(response.token)
             window.location.href="/dashboard"
      },
      error=>{
        console.log(error);
      }
      
      
    )

    }
    else{
      console.log("fields are Empty!!");
    }
  }

}
