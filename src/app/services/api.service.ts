import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUrl(path) {
    return `https://swapi.co/api/${path}`;
  }

  all(path) {
    return this.http.get(this.getUrl(path), {
      headers: new HttpHeaders({
        Accept: '*/*'
      })
    });
  }
}
