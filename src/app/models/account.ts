export interface AccountOpt {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_volunteer: number;
  api_token: string;
}

export class Account {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isVolunteer: boolean;
  apiToken: string;

  constructor(account: AccountOpt) {
    this.id = account.id;
    this.firstName = account.first_name;
    this.lastName = account.last_name;
    this.email = account.email;
    this.isVolunteer = account.is_volunteer === 1;
    this.apiToken = account.api_token;
  }
}
