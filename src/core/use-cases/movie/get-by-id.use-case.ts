import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { FullMovieResponse } from '../../../infrastructure/interfaces/full-movie-db-responses';
import { FullMovie } from '../entities/movie.entity';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mappers';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number
): Promise<FullMovie> => {
  try {
    const fullMovie = await fetcher.get<FullMovieResponse>( `${ movieId }` );
    return MovieMapper.fromMovieDBToEntity( fullMovie );
    
  } catch ( error ) {
    throw new Error( `Cannot get movie by id ${ movieId }` );
  }
};