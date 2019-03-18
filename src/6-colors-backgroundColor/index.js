import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class ColorsInterpolate extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000
    }).start();
  };

  render() {
    const boxColor = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(25,24,255)', 'rgb(0,0,0)']
    });
    return (
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, { backgroundColor: boxColor }]} />
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
