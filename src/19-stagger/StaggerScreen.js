import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class StaggerScreen extends Component {
  state = {
    animation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1)
  };

  startAnimation = () => {
    Animated.stagger(2000, [
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1000
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 1000
      })
    ]).start(() => {
      this.state.animation.setValue(0);
      this.state.scaleAnimation.setValue(1);
    });
  };

  render() {
    const boxColor = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(25,24,255)', 'rgb(134,49,99)']
    });
    const animatedStyle = {
      backgroundColor: boxColor,
      transform: [{ scale: this.state.scaleAnimation }]
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
