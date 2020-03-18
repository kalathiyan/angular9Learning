import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './authentication.routing';
import { SharedModule } from '../global/shared/shared.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
