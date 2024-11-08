import { useEffect, useState } from 'react';
import type { Movie } from '../../core/use-cases/entities/movie.entity';

import * as UseCase from '../../core/use-cases';
import { movieDBFecther } from '../../config/adapters/movieDB.adapter';
import { preset } from '../../../jest.config';

let popularPage = 1;

export const useMovies = () => {

  const [ isLoading, setIsLoading ] = useState( true );
  const [ nowPlaying, setNowPlaying ] = useState<Movie[]>( [] );
  const [ upComming, setUpComming ] = useState<Movie[]>( [] );
  const [ popular, setPopular ] = useState<Movie[]>( [] );
  const [ topRated, setTopRated ] = useState<Movie[]>( [] );

  useEffect( () => {
    initialLoad();
  }, [] );

  const initialLoad = async () => {
    const nowPlayingPromise = UseCase.moviesNowPlayingUseCase( movieDBFecther );
    const upCommingPromise = UseCase.moviesUpCommingUseCase( movieDBFecther );
    const popularPromise = UseCase.moviesPopularUseCase( movieDBFecther );
    const topRatedPromise = UseCase.moviesTopRatedUseCase( movieDBFecther );

    const [
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upCommingMovies,
    ] = await Promise.all( [
      nowPlayingPromise,
      upCommingPromise,
      popularPromise,
      topRatedPromise,
    ] );

    setNowPlaying( nowPlayingMovies );
    setUpComming( upCommingMovies );
    setPopular( popularMovies );
    setTopRated( topRatedMovies );
  };




  return {
    isLoading,
    nowPlaying,
    upComming,
    popular,
    topRated,


    // methods
    popularNextPage: async () => {
      popularPage++;
      const popularMovies = await UseCase.moviesPopularUseCase( movieDBFecther, {
        page: popularPage,
      } );

      setPopular( prev => [ ...prev, ...popularMovies ] );
    }
  };
};
