import { Component, OnInit } from '@angular/core';
import { Movies } from '../interfaces/Movies';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movies[];
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.all().subscribe((response: any) => {
      const allMovies: Movies[] = response.results;
      this.movies = allMovies;
    });
  }
}
