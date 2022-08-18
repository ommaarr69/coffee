import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name: any;
  email: any;
  constructor(private _AuthService: AuthService) {
    this._AuthService.encodedData();
  }

  ngOnInit(): void {
    this.name = JSON.parse(localStorage.getItem('res')).userName;
    this.email = JSON.parse(localStorage.getItem('res')).email;

  }

}
