import * as React from 'react';
import {Text, View} from 'react-native';

export default class Details extends React.Component {
  render() {
    const {item} = this.props.route.params;
    return (
      <View>
        <Text>{`Hello Details ${item.name}`}</Text>
      </View>
    );
  }
}
