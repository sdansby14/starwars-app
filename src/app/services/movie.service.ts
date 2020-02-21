import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getUrl() {
    return 'https://swapi.co/api/films';
  }

  all() {
    return this.http.get(this.getUrl(), {
      headers: new HttpHeaders({
        Accept: '*/*'
      })
    });
  }
}
