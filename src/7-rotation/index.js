import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class Rotation extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 1000
    }).start();
  };

  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '1080deg']
    });
    const animationStyle = { transform: [{ rotate: rotateInterpolate }] };
    return (
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animationStyle]} />
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
