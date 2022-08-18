import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './LogInPage/login/login.component';
import { RegisterComponent } from './RegisterPage/register/register.component';
import { StartPageComponent } from './StartPage/start-page/start-page.component';
import { NotfoundModule } from './Modules/Components/notfound/notfound.module';

const routes: Routes = [
  { path: '', redirectTo: "/start", pathMatch: 'full' },
  { path: 'start', component: StartPageComponent },

  {
    path: "admin", canActivate: [AuthGuard],
    loadChildren: () => import('./Modules/admin/admin.module').then((m) => m.AdminModule)
  },
  { path: 'register', component: RegisterComponent },
  { path: '**', loadChildren: () => NotfoundModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [StartPageComponent, LoginComponent, RegisterComponent]
