import * as React from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MyButton from '../components/MyButton';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/images/loginBackground.jpg'),
      title: 'Beijo no neném',
    };
  }

  backgroundChange = () => {
    this.setState({
      background: require('../assets/images/ballonImage.jpg'),
      title: 'Sentada com balões',
    });
    console.log('Pressionou!', this.state.title);
  };

  render() {
    return (
      <View style={styles.mainView}>
        <ImageBackground style={styles.imageBackground} source={this.state.background} resizeMode="cover">
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{`${this.state.title}`}</Text>
          </View>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} keyboardType="email-address" placeholder={'EMAIL'} />
            <TextInput style={styles.textInput} placeholder={'PASSWORD'} />
            <MyButton title="Login" screen="Home" navigation={this.props.navigation}/>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    backgroundColor: 'black',
  },
  imageBackground: {
    height: '100%',
    padding: 32,
  },
  titleView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  textInputView: {
    flex: 2,
  },
  textInput: {
    borderColor: '#777777',
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  button: {
    backgroundColor: '#7711AA',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
