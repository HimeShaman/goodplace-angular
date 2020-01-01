import {Coordinate} from '../services/geolocalisation.service';

export interface ActivitiesResult {
  activities: ActivityShortOpt[];
}

export interface ActivityShortOpt {
  id: number;
  name: string;
  date: string;
  long: number;
  lat: number;
  dist: number;
  category: string;
}

export class ActivityShort {
  id: number;
  name: string;
  date: Date;
  position: Coordinate;
  dist: number;
  category: string;

  constructor(activityShort: ActivityShortOpt) {
    this.id = activityShort.id;
    this.name = activityShort.name;
    this.date = new Date(Date.parse(activityShort.date));
    this.position = new Coordinate(activityShort.long, activityShort.lat);
    this.dist = activityShort.dist;
    this.category = activityShort.category;
  }
}
