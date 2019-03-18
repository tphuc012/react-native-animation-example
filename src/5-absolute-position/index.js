import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class AbsolutePosition extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 50,
      duration: 1000
    }).start();
  };

  render() {
    const animatedStyle = {
      top: this.state.animation,
      left: this.state.animation,
      right: this.state.animation
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
    backgroundColor: 'red',
    position: 'absolute',
    top: 50
  }
});
