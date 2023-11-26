import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = (`${environment.apiLiveScoreUrl}/news/v2/list-by-sport`);
  private headers: HttpHeaders = new HttpHeaders(environment.apiLiveScoreHeaders);

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get(this.url, {
      headers: this.headers, params: {
        category: '2021020913321516170',
        page: '4'
      },
    });
  }
}
