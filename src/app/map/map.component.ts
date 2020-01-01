import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as L from 'leaflet';
import {Coordinate} from '../services/geolocalisation.service';



const iconRetinaUrl = 'assets/img/marker-icon-2x.png';
const iconUrl = 'assets/img/marker-icon.png';
const shadowUrl = 'assets/img/marker-shadow.png';
const userIconUrl = 'assets/img/user-pin.png';
const eventIconUrl = 'assets/img/event-pin.png';

export const userIcon = L.icon({
  iconUrl: userIconUrl,
  iconSize: [41, 41],
  iconAnchor: [20, 20],
  popupAnchor: [20, 20],
  tooltipAnchor: [20, 20]
});

export const eventIcon = L.icon({
  iconUrl: eventIconUrl,
  iconSize: [41, 41],
  iconAnchor: [20, 20],
  popupAnchor: [20, 20],
  tooltipAnchor: [20, 20]
});

const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

export class MapMarker {
  coordinate: Coordinate;
  icon;

  constructor(coordinate: Coordinate, icon) {
    this.coordinate = coordinate;
    this.icon = icon;
  }
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit, OnChanges {

  private map;

  @Input()
  markers: MapMarker[];
  @Input()
  userMarker: MapMarker;

  private leafletMarkers = [];
  private leafletUserMarker;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
    if (this.userMarker) {
      this.initUserMarker();

      if (this.markers) {
        this.initEventMarkers();
      }
    }
    this.rescaleMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userMarker) {
      this.initUserMarker();

      if (this.markers) {
        this.initEventMarkers();
      }
    }
    this.rescaleMap();
  }

  private initMap() {
    this.map = L.map('map', {
      center: [ 0, 0 ],
      zoom: 18
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 100,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private initUserMarker() {
    this.leafletUserMarker = L.marker([this.userMarker.coordinate.lat, this.userMarker.coordinate.lon],
      {icon: this.userMarker.icon}).addTo(this.map);
    this.map.setView([this.userMarker.coordinate.lat, this.userMarker.coordinate.lon], 18);
  }

  private initEventMarkers() {
    this.leafletMarkers.forEach(leafletMarker => {
      this.map.removeLayer(leafletMarker);
    });

    this.leafletMarkers = [];

    this.markers.forEach(marker => {
      const leafletMarker = L.marker([marker.coordinate.lat, marker.coordinate.lon], {icon: marker.icon}).addTo(this.map);
      this.leafletMarkers.push(leafletMarker);
    });
  }


  private rescaleMap() {
    if (this.leafletMarkers && this.leafletMarkers.length > 1) {
      const group = new L.featureGroup([...this.leafletMarkers, this.leafletUserMarker]);
      this.map.fitBounds(group.getBounds());
    }
  }
}
