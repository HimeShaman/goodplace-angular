import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


export class Coordinate {
  lon: number;
  lat: number;

  constructor(lon: number, lat: number) {
  this.lon = lon;
  this.lat = lat;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GeolocalisationService {

  constructor() { }

  retrieveLonLat(): Observable<Coordinate> {
    return new Observable(subscriber => {
      navigator.geolocation.getCurrentPosition(position => {
        subscriber.next(new Coordinate(position.coords.longitude, position.coords.latitude));
        subscriber.complete();
      }, positionError => {
        subscriber.error(positionError);
        subscriber.complete();
      });
    });
  }
}
