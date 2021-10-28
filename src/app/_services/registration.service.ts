import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  register(username: string, password: string, email: string) : Observable<boolean>
  {
    return this.http.post<any>(environment.apiUrl + '/RegisterUser', {username,email, password}) //Make sure you point to the correct SERVER URL for login!
      .pipe(map(response => {
        return response.Ok; //If the registration is successfully then OK will be returned.
      }));
  }

}
