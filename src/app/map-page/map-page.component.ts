import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {MapMarker, userIcon} from '../map/map.component';
import {GeolocalisationService} from '../services/geolocalisation.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  markers: MapMarker[];
  userMarker: MapMarker;

  isAuthenticated = false;
  constructor(
    private authService: AuthService,
    private geolocationService: GeolocalisationService) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.geolocationService.retrieveLonLat().subscribe(value => {
      this.userMarker = new MapMarker(value, userIcon);
    });
  }

  doLogout() {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
