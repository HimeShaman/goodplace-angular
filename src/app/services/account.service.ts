import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account, AccountOpt} from '../models/account';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  createdAccount: Account;
  constructor(private http: HttpClient) { }

  register(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    isVolunteer: number,
    apiToken: string
  ): Observable<boolean> {
    return new Observable (subscriber => {
      this.http.post<AccountOpt>(`${environment.api.base_url}/register`,
        {id, firstName, lastName, email, password, isVolunteer, apiToken}).subscribe(result => {
          this.createdAccount = new Account(result);
          console.log(result);
          subscriber.next(true);
        }, error => {
          console.error(error);
          subscriber.next(false);
        }
      );
    });
  }

}
