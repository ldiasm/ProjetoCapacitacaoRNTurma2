import * as React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MyButton from '../components/MyButton';

const screenSizeHeight = Dimensions.get('window').height;
const screenSizeWidth = Dimensions.get('window').width;
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      background: require('../assets/images/loginBackground.jpg'),
      title: 'Beijo no neném',
    };
  }

  backgroundChange = (toggle) => {
    this.setState({
      background: toggle ? require('../assets/images/ballonImage.jpg') : require('../assets/images/loginBackground.jpg'),
      title: toggle ? 'Sentada com balões' : 'Beijo no neném',
      toggle: !toggle
    });
    console.log('Pressionou!', this.state.title);
  };

  render() {
    return (
      <ImageBackground style={styles.imageBackground} source={this.state.background} resizeMode="cover">
        <View style={styles.mainView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText} onPress={() => this.backgroundChange(this.state.toggle)}>{`${this.state.title}`}</Text>
          </View>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} keyboardType="email-address" placeholder={'EMAIL'} />
            <TextInput style={styles.textInput} placeholder={'PASSWORD'} />
            <MyButton title="Login" screen="Home" navigation={this.props.navigation} />
          </View>
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
    height: screenSizeHeight,
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
