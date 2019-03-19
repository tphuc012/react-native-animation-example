import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  Button
} from 'react-native';

const AnimatedButton = Animated.createAnimatedComponent(Button);
export default class CreateAnimatedComponentsScreen extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000
    }).start(() =>
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500
      }).start()
    );
  };

  render() {
    const colorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(51,55,88)', 'rgb(123,333,44)']
    });
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AnimatedButton
          title='preses Me'
          onPress={this.startAnimation}
          color={colorInterpolate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  }
});
