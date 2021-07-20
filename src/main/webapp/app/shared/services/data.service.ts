import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getHeaderData(): any {
    return this.http.get<any>('./content/assets/header.json');
  }

  getFooterData(): any {
    return this.http.get<any>('./content/assets/footer.json');
  }

  getHomeContent(): any {
    return this.http.get<any>('./content/assets/homeContent.json');
  }

  // Mock data

  getTLData(): any {
    return this.http.get<any>('./content/assets/tableLayout.json');
  }
}
