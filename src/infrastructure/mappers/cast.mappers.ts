import { Cast } from '../../core/use-cases/entities/cast.entity';
import { MovieDBCast, MovieDBCastResponse } from '../interfaces/cast-movie-db-response';

export class CastMapper {

  static fromMovieDBCastToEntity( actor: MovieDBCast ): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'Not character',
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${ actor.profile_path }`
        : 'https://i.stack.imgur.com/l60Hf.png'
    };
  }
}