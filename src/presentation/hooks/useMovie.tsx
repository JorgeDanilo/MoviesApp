import { useState, useEffect } from 'react';
import { View } from 'react-native';

import * as UseCase from '../../core/use-cases';
import { movieDBFecther } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/use-cases/entities/movie.entity';
import { Cast } from '../../core/use-cases/entities/cast.entity';

export const useMovie = ( movieId: number ) => {

  const [ isLoading, setIsLoading ] = useState( true );
  const [ movie, setmovie ] = useState<FullMovie>();
  const [ cast, setCast ] = useState<Cast[]>( [] );

  useEffect( () => {
    loadMovie();
  }, [ movieId ] );


  const loadMovie = async () => {
    setIsLoading( true );

    const fullMoviePromise = UseCase.getMovieByIdUseCase( movieDBFecther, movieId );
    const castPromise = UseCase.getMovieCastUseCase( movieDBFecther, movieId );

    const [
      fullMovie,
      cast
    ] = await Promise.all( [
      fullMoviePromise,
      castPromise
    ] );

    setmovie( fullMovie );
    setCast( cast );
    setIsLoading( false );
  };


  return {
    isLoading,
    movie,
    cast
  };
};