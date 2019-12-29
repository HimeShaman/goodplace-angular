export interface UserOpt {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_volunteer: number;
  api_token: string;
}

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isVolunteer: boolean;
  apiToken: string;

  constructor(user: UserOpt) {
    this.id = user.id;
    this.firstName = user.first_name;
    this.lastName = user.last_name;
    this.email = user.email;
    this.isVolunteer = user.is_volunteer === 1;
    this.apiToken = user.api_token;
  }
}
