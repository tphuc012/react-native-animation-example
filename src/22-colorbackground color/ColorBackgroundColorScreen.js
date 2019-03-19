import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class ColorBackgroundColorScreen extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 1000
    }).start(() => this.state.animation.setValue(0));
  };

  render() {
    const animatedInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ['rgb(71,23,199)', 'rgb(23,71,199)', 'rgb(199,71,23)']
    });
    const bgColor = this.state.animation.interpolate({
      inputRange: [0, 2],
      outputRange: ['rgb(25,24,255)', 'rgb(134,49,99)']
    });

    const animatedStyle = {
      backgroundColor: animatedInterpolate
    };
    return (
      <Animated.View style={{ flex: 1, backgroundColor: bgColor }}>
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
