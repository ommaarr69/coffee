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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
