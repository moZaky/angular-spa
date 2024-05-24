import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovieSearch, IMovieSearchResult } from '../models/movie';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  movies: IMovieSearchResult[] = [];
  moviesObs: Observable<IMovieSearch> = new Observable()
  isLoading: boolean = false;
  searchMovie: string = 'thor';
  error: string = '';
  pagesNumber: number[] = [];
  currentPage:number=1;
  constructor(private _movieService: MovieService, private router: Router) {}
 

  ngOnInit(): void {
    this.searchMovieByName(this.searchMovie,this.currentPage);
    this.moviesObs=  this._movieService.getMovies(this.searchMovie,this.currentPage);
    this.backendCore();
    
  }
  backendCore(){
    this._movieService.getMoviesFromBackend().subscribe(movies=>{
      console.log(movies)
    })
  }
  viewDetails(id: string) {
    this.router.navigate(['/details', id]);
  }
  searchMovieByName(name: string,pageNumber:number) {
    if (!name) {
      this.error = ' please enter movie name';
      return;
    }
    this.currentPage=pageNumber;
    this.error = '';
    this.isLoading = true;
    this._movieService.getMovies(name,pageNumber).subscribe((result) => {
      if (result.Response === 'True') {
        this.movies = result.Search;
    
        this.pagesNumber = Array(+result.totalResults);
      }

      this.isLoading = false;
    });
  }
  ngOnDestroy(): void {
   alert("destory")
  }
}
