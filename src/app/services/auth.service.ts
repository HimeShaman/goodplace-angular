import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User, UserOpt} from '../models/auth/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedUser: User;
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable(subscriber => {
      this.http.post<UserOpt>(`${environment.api.base_url}/api/login`, {email, password}).subscribe(result => {
        this.loggedUser = new User(result);
        localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
        subscriber.next(true);
      }, error => {
        console.error(error);
        subscriber.next(false);
      });
    });

  }
  isAuthenticated(): boolean {

    // if (this.loggedUser) {return true; }
    //
    // const storageUser = localStorage.getItem('loggedUser');
    // return storageUser !== undefined && JSON.parse(storageUser).apiToken;


    if (!this.loggedUser) {
      if (localStorage.getItem('loggedUser')) {
        const storedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if (storedUser.apiToken) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  logout() {
    this.loggedUser = undefined;
    if (localStorage.getItem('loggedUser')) {
      localStorage.removeItem('loggedUser');
    }
  }

}

