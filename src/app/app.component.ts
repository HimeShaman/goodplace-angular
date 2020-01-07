import { Component, OnChanges } from '@angular/core';
import {AuthService} from './services/auth.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goodplace-angular';
  menuItemsList = [];
  sideNavOpened = false;

  public loggedUser = this.authService.isAuthenticated();

  constructor(private authService: AuthService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private router: Router) {
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/add_circle_outline-24px.svg'));
    iconRegistry.addSvgIcon(
      'back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/arrow_back-24px.svg'));
    iconRegistry.addSvgIcon(
      'close',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/close-24px.svg'));
    iconRegistry.addSvgIcon(
      'mail',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/email-24px.svg'));
    iconRegistry.addSvgIcon(
      'agenda',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/event-24px.svg'));
    iconRegistry.addSvgIcon(
      'map',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/map-24px.svg'));
    iconRegistry.addSvgIcon(
      'profile',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/person-24px.svg'));
    iconRegistry.addSvgIcon(
      'pin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/room-24px.svg'));
    iconRegistry.addSvgIcon(
      'clock',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/schedule-24px.svg'));
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/search-24px.svg'));
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu-24px.svg'));
    iconRegistry.addSvgIcon(
      'info',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/info-24px.svg'));

  }

  closeSidenav() {
    this.sideNavOpened = false;
  }
}
