import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    Email: new FormControl(null, [Validators.required, Validators.email]),
    Password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][A-Za-z0-9]{8,16}$/)]),
  });

  errorMessage: string = '';


  constructor(private _router: Router, private _AuthService: AuthService) { }

  ngOnInit(): void { }

  submitData(formData: FormGroup) {
    console.log(formData);
    this._AuthService.login(formData.value).subscribe(
      (res) => {
        console.log(res);
        if (res.message == "success") {
          localStorage.setItem('userToken', res.token)
          this._AuthService.encodedData();
          this._router.navigate(['/Home'])
        }
        else {
          this.errorMessage = res.message;
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("done");
      }
    )
  }
  Login() {
    this._router.navigate(["../admin"])
  }

}

