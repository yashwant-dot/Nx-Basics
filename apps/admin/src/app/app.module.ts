import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '@demo/shared';

import { AppComponent } from './app.component';
import { HomeComponent } from 'libs/shared/src/lib/home/home.component';
import { sharedRoutes } from '@demo/shared';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Route[] = [
  {path: '', component: HomeComponent, data: { user: 'ADMIN' } },
  { path: 'auth', children: sharedRoutes },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule,SharedModule,RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
