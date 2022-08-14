import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './LogInPage/login/login.component';
import { RegisterComponent } from './RegisterPage/register/register.component';
import { StartPageComponent } from './StartPage/start-page/start-page.component';

const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: '', redirectTo: "/start", pathMatch: 'full' },

  {
    path: "admin",

    loadChildren: () => import('./Modules/admin/admin.module').then((m) => m.AdminModule)
  },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: "/start", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [StartPageComponent, LoginComponent, RegisterComponent]
