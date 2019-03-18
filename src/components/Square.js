import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

export default class Square extends PureComponent {
  render() {
    return <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />;
  }
}
