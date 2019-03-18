import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class WidthHeightPercent extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000
    }).start();
  };

  render() {
    const widthInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['10%', '50%']
    });
    const heightInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['10%', '20%']
    });
    const animationStyle = {
      width: widthInterpolate,
      height: heightInterpolate
    };
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
