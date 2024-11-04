import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  router = inject(Router);
  loggedIn = true;
  pendingInvitations = true;

  onSignup() {
    this.router.navigate(['signup']);
  }

  onLogin() {
    this.router.navigate(['login']);
  }
}
