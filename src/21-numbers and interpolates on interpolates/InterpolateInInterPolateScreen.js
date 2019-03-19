import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class InterpolateInInterpolateScreen extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 3000
    }).start(() => this.state.animation.setValue(0));
  };

  render() {
    const animatedInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2],
      outputRange: [0, 40, 300, 40, 0]
    });
    const boxColor = animatedInterpolate.interpolate({
      inputRange: [0, 300],
      outputRange: ['rgb(25,24,255)', 'rgb(134,49,99)']
    });
    const translateX = animatedInterpolate.interpolate({
      inputRange: [0, 30, 50, 150, 176, 200, 250, 300],
      outputRange: [0, 23, 11, 34, 11, 250, 23, 0]
    });
    const animatedStyle = {
      backgroundColor: boxColor,
      transform: [
        { translateY: animatedInterpolate },
        { translateX: translateX }
      ]
    };
    return (
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableWithoutFeedback>
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
