import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private httpClient: HttpClient) { }

  public getAllUnions(): Observable<any> {
    return this.httpClient.get(`${environment.apiURL}all`);
  }

  public addUnion(data: any): Observable<any>{
    return this.httpClient.post(`${environment.apiURL}create`, data);
  }
}
