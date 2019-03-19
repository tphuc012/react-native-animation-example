import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class VideoScreen extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 400,
      duration: 1000,
      useNativeDriver: true
    }).start(() =>
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start()
    );
  };

  render() {
    const animatedStyle = {
      transform: [{ translateY: this.state.animation }]
    };
    return (
      <Animated.View style={{ flex: 1, alignItems: 'center' }}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Text>Use native driver</Text>
          </Animated.View>
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
