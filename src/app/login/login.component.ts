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

  registerinForm!:FormGroup
  signinForm!: FormGroup;
  constructor( private fb: FormBuilder,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: ['Shubham', [Validators.required]],
      password: ['123', [Validators.required]],
    });

    this.registerinForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email:['',[Validators.email]],
      confirmPassword:['',[Validators.required]]
    })
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
   
    this.authService.login(formGroup.value.username, formGroup.value.password).subscribe({
      next: (res:any) => {
        console.log(res.token);
        this.authService.loginUser(res.token)
        this.router.navigate(['../loggedIn/home']);  
      },
      error: (err) => console.log(err)
    });
  }

  onRegister(formGroup: FormGroup) {
   

    this.authService.register(formGroup.value.username, formGroup.value.password,formGroup.value.email).subscribe({
      next: (res:any) => {
        console.log(res); 
      },
      error: (err) => console.log(err)
    });
  }

}
