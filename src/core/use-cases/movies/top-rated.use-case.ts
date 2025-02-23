import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { TopRatedResponse } from '../../../infrastructure/interfaces/movie-toprated-db-responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mappers';
import { Movie } from '../entities/movie.entity';

export const moviesTopRatedUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {

  try {

    const topRated = await fetcher.get<TopRatedResponse>( 'top_rated' );
    return topRated.results.map( MovieMapper.fromMovieDBResultToEntity );
  } catch ( error ) {
    console.log( `Error fetching data Top Rated ${ error }` );
    throw new Error( `Error fetching data Top Rated ${ error }` );
  }

};