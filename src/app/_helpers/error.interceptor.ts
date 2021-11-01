import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "../_services/authentication.service";
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private accountService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.accountService.logout();
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
