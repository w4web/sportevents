import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { Athlete, IAthlete } from '../../shared/model/athlete.model';

type EntityResponseType = HttpResponse<IAthlete>;
type EntityArrayResponseType = HttpResponse<IAthlete[]>;

@Injectable({
  providedIn: 'root',
})
export class MyProfileService {
  public resourceUrl = SERVER_API_URL + 'api/profile';

  constructor(protected http: HttpClient) {}

  create(training: IAthlete): Observable<EntityResponseType> {
    return this.http.post<IAthlete>(this.resourceUrl, training, { observe: 'response' });
  }

  getProfileFields(): any {
    return this.http.get<any>('./content/assets/data/profile.json');
  }
}
