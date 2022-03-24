import * as React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View} from 'react-native';
import MyButton from '../components/MyButton';

export default class Details extends React.Component {
  render() {
    const {item} = this.props.route.params;
    return (
      <ImageBackground
        style={styles.imageBackgorund}
        resizeMode='contain'
        source={{uri: 'https://www.designmantic.com/blog/wp-content/uploads/2016/05/Game-of-Thrones-Logo-718x300.jpg'}}>
        <View style={styles.mainView}>
          <Text style={styles.textDetails}>{`Nome: ${item.name}`}</Text>
          <Text style={styles.textDetails}>{`Conhecido como: ${item.aliases}`}</Text>
          <Text style={styles.textDetails}>{`Interpretado por: ${item.playedBy}`}</Text>
          <Text style={styles.textDetails}>{`Cultura: ${item.culture}`}</Text>
          <Text style={styles.textDetails}>{`Gênero: ${item.gender}`}</Text>
          <Text style={styles.textDetails}>{`Nascido em: ${item.born}`}</Text>
        <MyButton title={'Home'} screen={'Home'} navigation={this.props.navigation} ></MyButton>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgorund: {
    height: Dimensions.get('window').height,
  },
  mainView: {
    flex: 1,
    padding: 32,
    backgroundColor: 'rgba(120,80,14,0.6)',
  },
  textDetails: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    margin: 2,
    backgroundColor: 'rgba(10,10,14,0.6)',
  },
});
