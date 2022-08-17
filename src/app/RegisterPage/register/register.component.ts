import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required]),

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),

    phoneNumber: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
  });

  errorMessage: string = '';
  constructor(private _Router: Router, private _AuthService: AuthService) { }

  ngOnInit(): void {
  }

  submitData(formData: FormGroup) {
    console.log(formData);
    this._AuthService.register(formData.value).subscribe(
      (res) => {
        console.log(res);

        this._Router.navigate(['/login']);

        
      },
      (err) => {
        console.log(err);
        this.errorMessage = err.message;

      },
      () => {
        console.log("done");
      }
    )
  }

}
