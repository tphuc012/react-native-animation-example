import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class RotateNewScreen extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000
    }).start(() => this.state.animation.setValue(0));
  };

  render() {
    const xInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const yInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '0deg', '180deg']
    });

    const animatedStyle = {
      transform: [{ rotateX: xInterpolate }, { rotateY: yInterpolate }]
    };
    return (
      <Animated.View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableWithoutFeedback>
      </Animated.View>
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
