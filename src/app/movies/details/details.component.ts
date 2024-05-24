import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovieResult, IMovieSearchResult } from '../models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  isLoading: boolean = false;
  movie: IMovieResult = {} as IMovieResult;
  $moviesObs: Observable< IMovieResult>= new Observable()
  imdbID:string
  constructor(
    private _movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router 
  ) {

    this.imdbID = this.route.snapshot.params['id']
     
  }
  ngOnInit(): void {
    this.isLoading = true;
    this.$moviesObs = this._movieService.getMovieById( this.imdbID)
    this._movieService.getMovieById( this.imdbID).subscribe((result) => {
    
      if (result.Response) {
        this.movie=result;
      }
      this.isLoading = false;
    });

    
  }
}
