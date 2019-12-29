import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hide = true;
  loginForm;

  public togglePassword() {
    this.hide = !this.hide;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['',
        Validators.compose(
          [Validators.email, Validators.required]
        )],
      password: ['',
        Validators.compose(
          [Validators.required, Validators.minLength(8)]
        )
      ]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) { return; }
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(value => {
      if (!value) {
        this.snackBar.open('Oops ! La combinaison email/mot de passe semble incorrecte',
          'OK', {duration: 10000});
      } else {
        this.router.navigate(['']);
      }
    }, error => {
      this.snackBar.open('Oops ! Une erreur inattendue est survenue ! :( ',
        'OK', {duration: 10000});
      console.log(error);
    });
  }

  getErrorMessageEmail() {
    const email = this.loginForm.get('email');
    if (email.hasError('required')) {
      return 'Un email est requis pour la connexion.';
    }
    if (email.hasError('email')) {
      return 'L\'e-mail entré n\'est pas au bon format.';
    }
  }

  getErrorMessagePassword() {
    const password = this.loginForm.get('password');
    if (password.hasError('required')) {
      return 'Un mot de passe est requis pour la connexion.';
    }
    if (password.hasError('minlength')) {
      return 'Le mot de passe entré fait moins de 8 caractères.';
    }
  }


  ngOnInit() {
  }

}
