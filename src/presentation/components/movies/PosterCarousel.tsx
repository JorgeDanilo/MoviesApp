import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Movie } from '../../../core/use-cases/entities/movie.entity';
import { MoviewPoster } from './MoviewPoster';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = ( { height = 440, movies }: Props ) => {
  return (
    <View style={ { height } }>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={ false }
      >
        {
          movies.map( movie => <MoviewPoster key={ movie.id } movie={ movie } /> )
        }

      </ScrollView>
    </View>
  );
};