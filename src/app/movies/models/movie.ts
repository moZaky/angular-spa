 

export interface IMovieSearchResult{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
export interface IMovieSearch
{
    Search:IMovieSearchResult[];
    totalResults: string;
    Response: string;
    Error:""
}

export  interface IMovieResult extends IMovieSearchResult{
 
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface Rating {
  Source: string;
  Value: string;
}

 