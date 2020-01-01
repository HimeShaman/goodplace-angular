import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.registerForm = this.formBuilder.group( {
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', Validators.compose(
        [Validators.required, Validators.email]
      )],
      password: ['', Validators.compose(
        [Validators.minLength(8), Validators.required]
      )],
      passwordconfirm: ['', Validators.required]
    }
      );
  }

  onSubmit() {
    if (this.registerForm.invalid) { return; }
  }

  ngOnInit() {
  }

}
