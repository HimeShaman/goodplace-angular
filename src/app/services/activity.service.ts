import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivitiesResult, ActivityShort, ActivityShortOpt} from '../models/activityShort';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

   findActivities(userLon: number, userLat: number): Observable<ActivityShort[]> {
    return this.http.get<ActivitiesResult>(`${environment.api.base_url}/activities?long=${userLon}&lat=${userLat}&dist=1000`).pipe(
      map(values => values.activities.map(value => new ActivityShort(value)))
    );
}
}
