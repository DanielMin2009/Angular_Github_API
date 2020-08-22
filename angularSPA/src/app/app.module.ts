import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
// Services
import { UsersService } from './Services/users.service';
// Components & Views
import { AppComponent } from './app.component';

import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { HomeComponent } from './Views/home/home.component';
import { DetailComponent } from './Views/detail/detail.component';
import { UserCardComponent } from './Components/Shared/user-card/user-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, DetailComponent, UserCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
