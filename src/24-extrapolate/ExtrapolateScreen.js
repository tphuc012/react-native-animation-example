import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class ExtrapolateScreen extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 4,
      duration: 1000
    }).start(() =>
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }).start()
    );
  };

  render() {
    const interpolate = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: [1, 2],
      extrapolate: 'clamp',
      // extrapolate: "extend",
      // extrapolate: 'identity'
      // extrapolateLeft: 'clamp',
      // extrapolateRight: 'clamp'
    });

    const animatedStyle = {
      transform: [{ scale: interpolate }]
    };
    return (
      <Animated.View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
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
