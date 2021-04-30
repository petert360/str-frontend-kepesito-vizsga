import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //BASE_URL = 'http://localhost:3000/movies';
  BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/petert360/movies';
  list$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  getMovieList(): void {
    this.http.get<Movie[]>(this.BASE_URL).subscribe(
      movies => this.list$.next(movies)
    )
  }

  deleteMovie(id: number): void {
    this.http.delete<Movie>(`${this.BASE_URL}/${id}`).subscribe(
      () => this.getMovieList()
    );
  }

}
