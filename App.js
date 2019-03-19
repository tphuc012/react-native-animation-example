import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/homeScreen';
import Opacity from './src/1-opacity';
import TranslatePosition from './src/2-translate-position';
import Scale from './src/3-scale';
import WidthHeightValues from './src/4-width-height-values';
import AbsolutePosition from './src/5-absolute-position';
import ColorsInterpolate from './src/6-colors-backgroundColor';
import Rotation from './src/7-rotation';
import WidthHeightPercent from './src/8-width-height-percent';
import EasingScreen from './src/9-easing';
import SpringScreen from './src/10-spring';
import EventScreen from './src/11-event';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: HomeScreen, navigationOptions: { title: 'Home' } },
      Opacity: { screen: Opacity, navigationOptions: { title: 'Home' } },
      TranslatePosition: {
        screen: TranslatePosition,
        navigationOptions: { title: 'TranslatePosition' }
      },
      Scale: { screen: Scale, navigationOptions: { title: 'Scale' } },
      WidthHeightValues: {
        screen: WidthHeightValues,
        navigationOptions: { title: 'WidthHeightValues' }
      },
      AbsolutePosition: {
        screen: AbsolutePosition,
        navigationOptions: { title: 'AbsolutePosition' }
      },
      ColorsInterpolate: {
        screen: ColorsInterpolate,
        navigationOptions: { title: 'ColorsInterpolate' }
      },
      Rotation: { screen: Rotation, navigationOptions: { title: 'Rotation' } },
      WidthHeightPercent: {
        screen: WidthHeightPercent,
        navigationOptions: { title: 'WidthHeightPercent' }
      },
      EasingScreen: {
        screen: EasingScreen,
        navigationOptions: { title: 'EasingScreen' }
      },
      SpringScreen: {
        screen: SpringScreen,
        navigationOptions: { title: 'SpringScreen' }
      },
      EventScreen: {
        screen: EventScreen,
        navigationOptions: { title: 'EventScreen' }
      }
    },
    {
      initialRouteName: 'Home'
    }
  )
);
export default class App extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    );
  }
}
