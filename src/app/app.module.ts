import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatisticCardComponent } from './components/statistic-card/statistic-card.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { ClientListItemComponent } from './components/client-list-item/client-list-item.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { AdminsComponent } from './pages/admins/admins.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    StatisticCardComponent,
    OrderTableComponent,
    ClientListItemComponent,
    OrdersComponent,
    ClientsComponent,
    ClientCardComponent,
    AdminsComponent,
    ProfileComponent,
    ProfileCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
