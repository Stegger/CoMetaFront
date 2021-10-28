import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from "./users/users.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {AuthGuard} from "./_guards/auth.guard";
import {AuthenticationService} from "./_services/authentication.service";
import {HomeComponent} from "./home/home.component";
import {MessageComponent} from "./message/message.component";
import {RegisterComponent} from "./register/register.component";
import {RegistrationService} from "./_services/registration.service";
import {AlertService} from "./_services/alert.service"
import {AlertComponent} from "./alert/alert.component";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent,
    MessageComponent,
    RegisterComponent,
    AlertComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
    AuthGuard,
    AuthenticationService,
    RegistrationService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
