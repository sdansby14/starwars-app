import { Component, OnInit } from '@angular/core';
import { Movies } from '../interfaces/Movies';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movies[];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.apiService.all('films').subscribe((response: any) => {
      const allMovies: Movies[] = response.results;
      this.movies = allMovies;
    });
  }
}
