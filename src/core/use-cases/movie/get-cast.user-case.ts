import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBCastResponse } from '../../../infrastructure/interfaces/cast-movie-db-response';
import { CastMapper } from '../../../infrastructure/mappers/cast.mappers';
import { Cast } from '../entities/cast.entity';

export const getMovieCastUseCase = async ( fetcher: HttpAdapter, movieId: number ): Promise<Cast[]> => {


  try {
    const { cast } = await fetcher.get<MovieDBCastResponse>( `/${ movieId }/credits` );
    const actor = cast.map( CastMapper.fromMovieDBCastToEntity );
    return actor;
  } catch ( error ) {
    throw new Error( `Cannot get movie cast ${ movieId }` );
  }
};