import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import Opacity from './src/1-opacity';
import TranslatePosition from './src/2-translate-position';
export default class App extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TranslatePosition />
      </View>
    );
  }
}
