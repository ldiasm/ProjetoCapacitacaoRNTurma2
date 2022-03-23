import * as React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export default class MyButton extends React.Component {
  render() {
    const {title, screen, navigation} = this.props;
    return (
      <Pressable style={styles.mainTheme} onPress={() => navigation.navigate(screen, {screen: screen})}>
        <Text style={styles.textButton}>{`${title}`}</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  mainTheme: {
    height: 50,
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 10,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});
