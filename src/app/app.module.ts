import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';

import {
  provideRouter,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  withComponentInputBinding,
} from '@angular/router';
import { routes } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { HomeComponent } from './components/home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { BookingsComponent } from './components/bookings/bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BookingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    CardModule,
    NgOptimizedImage,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    FloatLabelModule,
    DropdownModule,
    AvatarModule,
    RouterLinkActive,
  ],
  providers: [provideRouter(routes, withComponentInputBinding())],
  bootstrap: [AppComponent],
  exports: [NavbarComponent],
})
export class AppModule {}
