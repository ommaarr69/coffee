import { StartPageComponent } from './StartPage/start-page/start-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './LogInPage/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './Modules/Components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './Modules/Components/header/header.component';
import { FooterComponent } from './Modules/Components/footer/footer.component';
import { HomeComponent } from './Modules/Components/home/home.component';
import { CartComponent } from './Modules/Components/cart/cart.component';
import { ProfileComponent } from './Modules/Components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ProfileComponent,
    LoginComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
