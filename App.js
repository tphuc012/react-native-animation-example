import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import Opacity from './src/1-opacity';
import TranslatePosition from './src/2-translate-position';
import Scale from './src/3-scale';
import WidthHeightValues from './src/4-width-height-values';
import AbsolutePosition from './src/5-absolute-position';
import ColorsInterpolate from './src/6-colors-backgroundColor';
import Rotation from './src/7-rotation';
import WidthHeightPercent from './src/8-width-height-percent';
import EasingScreen from './src/9-easing';

export default class App extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <EasingScreen />
      </View>
    );
  }
}
