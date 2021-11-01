import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from "../../environments/environment";
import {AuthenticationService} from "../_services/authentication.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const user = this.accountService.getUsername();
    const isLoggedIn = user && this.accountService.getToken();
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.accountService.getToken()}`
        }
      });
    }

    return next.handle(request);
  }
}
