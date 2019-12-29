import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goodplace-angular';
  sideNavOpened = false;
  public loggedUser = this.authService.isAuthenticated();

  constructor(private authService: AuthService) {

  }

}
