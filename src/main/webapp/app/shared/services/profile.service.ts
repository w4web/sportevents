import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getLoginFields(): any {
    return this.http.get<any>('./content/assets/loginFormFields.json');
  }

  getRegisterFields(): any {
    return this.http.get<any>('./content/assets/registerFormFields.json');
  }

  editUserFields(): any {
    return this.http.get<any>('./content/assets/editUserFields.json');
  }
}
