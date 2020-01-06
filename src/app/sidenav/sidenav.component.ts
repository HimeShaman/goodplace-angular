import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }
  public loggedUser = this.authService.isAuthenticated();

  @Output() itemClick = new EventEmitter();

  ngOnInit() {
  }
  doCloseSidenav() {
    this.itemClick.emit();
  }

  doLogout() {
    this.authService.logout();
    this.loggedUser = false;
    this.router.navigate(['login']);
  }
}
