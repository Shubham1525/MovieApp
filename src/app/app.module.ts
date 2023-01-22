import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DescrpageComponent } from './descrpage/descrpage.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './logged-in/navbar/navbar.component';
import { HomepageComponent } from './logged-in/homepage/homepage.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { DescrpageComponent } from './logged-in/descrpage/descrpage.component';
import { ReviewspageComponent } from './logged-in/descrpage/reviewspage/reviewspage.component';
import { AuthService } from '../app/login/auth.service';
import { AuthGuard } from '../app/interceptors/auth-guard';
import { AuthInterceptor } from '../app/interceptors/http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    DescrpageComponent,
    MovieListComponent
    LoginComponent,
    NavbarComponent,
    HomepageComponent,
    LoggedInComponent,
    DescrpageComponent,
    ReviewspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [AuthService,AuthGuard,[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
