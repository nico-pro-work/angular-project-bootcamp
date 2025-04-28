import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OptionDelete, Option } from '@models/api-models';
import { Observable } from 'rxjs';
 
/**
 * Abstract service providing all methods to call the backend.
 */
@Injectable()
export class ApiService {
    private readonly apiUrl = 'https://lu-pocket-tools.wse.ent.cginet/ficjava/api/v1';

  constructor(private http: HttpClient) {}
 
  public get<R>(endpoint: string, options?: Option): Observable<R> {
    return this.http.get<R>(`${this.apiUrl}/${endpoint}`, options);
  }
 
  public post<B, R>(endpoint: string, body: B, options?: Option): Observable<R> {
    return this.http.post<R>(`${this.apiUrl}/${endpoint}`, body, options);
  }
 
  public put<B, R>(endpoint: string, body: B, options?: Option): Observable<R> {
    return this.http.put<R>(`${this.apiUrl}/${endpoint}`, body, options);
  }
 
  public head<R>(endpoint: string, options?: Option): Observable<R> {
    return this.http.head<R>(`${this.apiUrl}/${endpoint}`, options);
  }
 
  public delete<B, R>(endpoint: string, body: B, options?: OptionDelete): Observable<R> {
    if (options && body) {
      options.body = body;
    }
    return this.http.request<R>('delete', `${this.apiUrl}/${endpoint}`, options);
  }
}
 