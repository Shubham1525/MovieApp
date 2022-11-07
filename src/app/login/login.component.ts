import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm!: FormGroup;
  constructor( private fb: FormBuilder,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: ['Shubhamk116@gmail.com', [Validators.required]],
      password: ['Shubh123', [Validators.required]],
    });
  }

  /* -----Return email control ----*/
  get username() {
    return this.signinForm.get('username');
  }

  /* -----Return password control ----*/
  get password() {
    return this.signinForm.get('password');
  }

  onSubmit(formGroup: FormGroup) {
   
    // const basicAutToken = localStorage.getItem(LOCAL_STORAGE_KEYS.BASIC_AUTH_TOKEN);
    // if(basicAutToken === undefined || basicAutToken === null) {
    //   this.helperService.fetchBasicAuthToken();
    // }
    this.authService.login(formGroup.value.username, formGroup.value.password).subscribe({
      next: (res:any) => {
        console.log(res.token);
        this.authService.loginUser(res.token)
        this.router.navigate(['../loggedIn/home']);  
      },
      error: (err) => console.log(err)
    });
  }

}
