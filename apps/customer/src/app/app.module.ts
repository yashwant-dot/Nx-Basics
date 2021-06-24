import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '@demo/shared';

import { AppComponent } from './app.component';
import { HomeComponent } from 'libs/shared/src/lib/home/home.component';
import { sharedRoutes } from '@demo/shared';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Route[] = [
  {path: '', component: HomeComponent, data: { user: 'CUSTOMER' } },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'auth', children: sharedRoutes }
];

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule,SharedModule,RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
