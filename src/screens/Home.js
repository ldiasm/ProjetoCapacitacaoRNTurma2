import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import MyButton from '../components/MyButton';

const DATA = [
    {
        id: 1,
        name: 'Laranja',
        size: '1L'
    },
    {
        id: 2,
        name: 'Uva',
        size: '700ml'
    },
    {
        id: 3,
        name: 'Abacaxi',
        size: '200ml'
    },
    {
        id: 4,
        name: 'Limão',
        size: '500ml'
    },
    {
        id: 5,
        name: 'Groselha',
        size: '2L'
    },

]
export default class Home extends React.Component {

    renderItem = ({item}) => {
        console.log("Item: ", item)
        return (
            <View style={{height: 30, backgroundColor: 'gray', margin: 4}}>
                <Text>
                    {`Suco de ${item.name} tamanho ${item.size}`}
                </Text>
            </View>
        )
    }

  render() {
    return (
      <View style={{padding: 32}}>
        <FlatList data={DATA} renderItem={item => this.renderItem(item)}/>
        <MyButton title="Login" screen="Login" navigation={this.props.navigation} />
      </View>
    );
  }
}
