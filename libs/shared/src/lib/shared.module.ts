import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const sharedRoutes: Route[] = [
  { path:'login', component: LoginComponent }
]

@NgModule({
  imports: [CommonModule,FormsModule],
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  exports: [
    HomeComponent
  ],
})
export class SharedModule {}
