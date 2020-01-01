import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {eventIcon, MapMarker, userIcon} from '../map/map.component';
import {Coordinate, GeolocalisationService} from '../services/geolocalisation.service';
import {ActivityService} from '../services/activity.service';
import {ActivityShort} from '../models/activityShort';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  markers: MapMarker[];
  userMarker: MapMarker;
  activities: ActivityShort[];

  isAuthenticated = false;
  constructor(
    private authService: AuthService,
    private geolocationService: GeolocalisationService,
    private activityService: ActivityService) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.geolocationService.retrieveLonLat().subscribe(value => {
      // this.userMarker = new MapMarker(value, userIcon);
      this.userMarker = new MapMarker(new Coordinate(2.4180969, 48.851806), userIcon);
      this.activityService.findActivities(this.userMarker.coordinate.lon, this.userMarker.coordinate.lat).subscribe(activities => {
        this.activities = activities;
        this.markers = this.activities.map(activity => new MapMarker(activity.position, eventIcon));
        }
      );

    });
  }

  doLogout() {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
