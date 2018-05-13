import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UIRouterModule, UIRouter } from "@uirouter/angular";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';

let dashboardState = {
  name: 'dashboard',
  url: '/dashboard',
  component: DashboardComponent
};

let modalState = {
  name: 'dashboard.modal',
  url: '/modal',
  component: ModalComponent
};

let alertState = {
  name: 'dashboard.alert',
  url: '/alert',
  component: AlertComponent
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ModalComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states: [dashboardState, modalState, alertState], useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
