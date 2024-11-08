import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoaders } from '../../components/loaders/FullScreenLoaders';


interface Props extends StackScreenProps<RootStackParams, 'Details'> { };

export const DetailsScreen = ( { route }: Props ) => {

  const { movieId } = route.params;

  const { isLoading, movie, cast } = useMovie( movieId );

  if ( isLoading ) {
    return <FullScreenLoaders />;
  }

  return (
    <ScrollView>
      <View>
        <MovieHeader
          originalTitle={ movie!.originalTitle }
          title={ movie!.title }
          poster={ movie!.poster }
        />

        <MovieDetails movie={ movie! } cast={ cast } />

      </View>
    </ScrollView>

  );
};