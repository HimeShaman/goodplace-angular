import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapPageComponent} from './map-page/map-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';


const routes: Routes = [
  {path: '', component: MapPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
