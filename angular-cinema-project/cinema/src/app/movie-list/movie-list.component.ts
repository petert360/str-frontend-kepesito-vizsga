import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  //movies: Movie[] = [];
  movieList$: BehaviorSubject<Movie[]> = this.mService.list$;

  constructor(
    private mService: HttpService,
  ) { }

  ngOnInit(): void {
  }

  getMovies(): void {
    this.mService.getMovieList()
  }

  deleteMovie(id: number): any {
    this.mService.deleteMovie(id);
  }

}
