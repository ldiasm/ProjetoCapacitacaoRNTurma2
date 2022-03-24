import * as React from 'react';
import {FlatList, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MyButton from '../components/MyButton';
import gotApi from '../services/gotApi';
import pokeApi from '../services/pokeApi';

const DATA = [
  {
    id: 1,
    name: 'Laranja',
    size: '1L',
  },
  {
    id: 2,
    name: 'Uva',
    size: '700ml',
  },
  {
    id: 3,
    name: 'Abacaxi',
    size: '200ml',
  },
  {
    id: 4,
    name: 'Limão',
    size: '1500ml',
  },
  {
    id: 5,
    name: 'Groselha',
    size: '2L',
  },
  {
    id: 6,
    name: 'Graviola',
    size: '100ml',
  },
  {
    id: 7,
    name: 'Acerola',
    size: '1700ml',
  },
  {
    id: 8,
    name: 'Melão',
    size: '100ml',
  },
  {
    id: 9,
    name: 'Melancia',
    size: '100ml',
  },
  {
    id: 10,
    name: 'Cajá',
    size: '5L',
  },
];
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacter: {},
      gotData: [],
      pokeData: [],
      randomNumber: Math.floor(Math.random() * 44),
    };
  }

  componentDidMount = () => {
    this.getData();
    this.getPokemon();
    console.log('RANDOM NUMBER: ', this.state.randomNumber);
  };

  goToDetail = (item) => {
    this.props.navigation.navigate('Details', {screen: 'Details', item: item});
  };

  getData = () => {
    const params = {
      page: this.state.randomNumber,
      pageSize: 50,
    };
    gotApi.get('/characters?page=' + params.page + '&pageSize=' + params.pageSize).then((result) => {
      this.setState({
        gotData: result.data,
      });
    });
  };

  getPokemon = () => {
    const params = {
      offset: 0,
      limit: 50,
    };
    pokeApi.get('/pokemon?offset=' + params.offset + '&limit=' + params.limit).then((result) => {
      this.setState({
        pokeData: result.data.results,
      });
      console.log('POKEMONS RESULTS: ', result.data.results);
    });
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity onPress={() => this.goToDetail(item)}>
          <Text style={styles.listItemContentTitle}>{`${item.name}`}</Text>
          <Text style={styles.listItemContentSubtitle}>{`${item.aliases}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={{uri: 'https://cdn.pixabay.com/photo/2019/06/05/23/48/death-valley-4254871_960_720.jpg'}}>
        <View style={styles.mainView}>
          <FlatList data={this.state.gotData} renderItem={(item) => this.renderItem(item)} />
          <MyButton title="Login" screen="Login" navigation={this.props.navigation} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 32,
    backgroundColor: 'rgba(120,80,14,0.6)',
  },
  imageBackground: {
    height: '100%',
  },
  listItem: {
    height: 75,
    backgroundColor: 'gray',
    margin: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 12,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    borderRightColor: 'white',
    borderRightWidth: 3,
  },
  listItemContentTitle: {
    fontSize: 24,
    color: 'orange',
    fontWeight: '600',
    margin: 8,
  },
  listItemContentSubtitle: {
    fontSize: 12,
    color: 'white',
    fontWeight: '400',
    alignSelf: 'flex-end',
    margin: 8,
  },
});
