import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import {
  MatButtonModule,
  MatCheckboxModule, MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MapPageComponent } from './map-page/map-page.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MapPageComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatToolbarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
