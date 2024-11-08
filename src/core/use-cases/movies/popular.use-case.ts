import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { PopularMovieResponse } from '../../../infrastructure/interfaces/movie-popular-db-responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mappers';
import { Movie } from '../entities/movie.entity';

interface Options {
  page?: number;
  limite?: number;
}

export const moviesPopularUseCase = async ( fetcher: HttpAdapter, options?: Options ): Promise<Movie[]> => {

  try {

    const popularMovies = await fetcher.get<PopularMovieResponse>( '/popular', {
      params: {
        page: options?.page ?? 1
      }
    } );
    
    return popularMovies.results.map( MovieMapper.fromMovieDBResultToEntity );
  } catch ( error ) {
    console.log( `Error fetching data Popular ${ error }` );
    throw new Error( `Error fetching data Popular ${ error }` );
  }

};