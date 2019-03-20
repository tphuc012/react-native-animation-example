import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class AnimatedHiddenScreen extends Component {
  state = { animation: new Animated.Value(1), visible: true };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 1000
    }).start(({ finished }) => {
      setTimeout(() => {
        if (finished) {
          this.setState({ visible: false });
        } else {
          Animated.spring(this.state.animation, { toValue: 1 }).start();
        }
      }, 1000);
    });
  };

  render() {
    const translateYInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 0]
    });
    const animatedStyle = {
      opacity: this.state.animation,
      transform: [{ translateY: translateYInterpolate }]
    };
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.state.visible && (
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, animatedStyle]} />
          </TouchableWithoutFeedback>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { width: 100, height: 100, backgroundColor: 'red' }
});
