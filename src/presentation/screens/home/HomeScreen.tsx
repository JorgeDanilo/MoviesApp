
import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/userMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular, topRated, upComming, popularNextPage } = useMovies();

  // if ( isLoading ) {
  //   return <Text>Carregando...</Text>;
  // }

  return (
    <ScrollView>
      <View style={ { marginTop: top + 20, paddingBottom: 30 } }>

        {/* Principal */ }
        <PosterCarousel movies={ nowPlaying } />

        {/* Populares */ }
        <HorizontalCarousel
          movies={ popular }
          title='Populares'
          loadNextPage={ popularNextPage }
        />

        {/* Top Rated */ }
        <HorizontalCarousel movies={ topRated } title='Mais qualificados' />

        {/* Proxmos */ }
        <HorizontalCarousel movies={ upComming } title='Próximos Lançamentos' />

      </View>

    </ScrollView>
  );
};