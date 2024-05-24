import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {   IMovieResult, IMovieSearch } from './models/movie';
import { Observable } from 'rxjs';

const API_KEY:string="eaa68758";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  
  constructor(private _httpClient:HttpClient) { }

  getMovies(movieName:string, page:number =1):Observable<IMovieSearch>{
    return this._httpClient.get<IMovieSearch>(`http://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}&page=${page}`)
  }
  getMovieById(id:string):Observable<IMovieResult>{
    return this._httpClient.get<IMovieResult>(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
  }
  getMoviesFromBackend(){
    return this._httpClient.get<IMovieResult>(`http://localhost:5057/Movies/list?pageNumber=1&pageSize=10`)

   
  }
}
