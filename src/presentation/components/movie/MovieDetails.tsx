import { Text, View } from 'react-native';
import { FullMovie } from '../../../core/use-cases/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { FlatList } from 'react-native-gesture-handler';
import { Cast } from '../../../core/use-cases/entities/cast.entity';
import { CastActor } from '../cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ( { movie, cast }: Props ) => {
  return (
    <>
      <View style={ { marginHorizontal: 20 } }>
        <View style={ { flexDirection: 'row' } }>
          <Text> { movie.rating }</Text>

          <Text style={ { marginLeft: 5 } }>-{ movie.genres.join( ',' ) }</Text>
        </View>

        <Text style={ { fontSize: 16, marginTop: 10, fontWeight: 'bold' } }>História</Text>
        <Text style={ { fontSize: 16 } }>{ movie.description }</Text>

        <Text style={ { fontSize: 23, marginTop: 10, fontWeight: 'bold' } }>
          Budget
        </Text>

        <Text style={ { fontSize: 18 } }>
          { Formatter.currency( movie.budget ) }
        </Text>
      </View>

      <View style={ { marginTop: 10, marginBottom: 30 } }>
        <Text style={ {
          fontSize: 23,
          marginVertical: 10,
          fontWeight: 'bold',
          marginHorizontal: 20
        } }>
          Atores
        </Text>

        <FlatList
          data={ cast }
          keyExtractor={ ( item ) => item.id.toString() }
          horizontal
          showsHorizontalScrollIndicator={ false }
          renderItem={ ( { item } ) => <CastActor actor={ item } /> }
        />


      </View>
    </>
  );
};