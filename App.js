import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import Opacity from './src/1-opacity';
export default class App extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Opacity />
      </View>
    );
  }
}
