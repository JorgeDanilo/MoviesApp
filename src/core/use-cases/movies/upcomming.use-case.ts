import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { UpCommingResponse } from '../../../infrastructure/interfaces/movie-upcomming-db-respponses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mappers';
import { Movie } from '../entities/movie.entity';

export const moviesUpCommingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {

  try {

    const upComming = await fetcher.get<UpCommingResponse>( '/upcoming' );
    return upComming.results.map( MovieMapper.fromMovieDBResultToEntity );

  } catch ( error ) {
    console.log( error );
    throw new Error( `Error fetching data UpComming ${ error }` );

  }

};