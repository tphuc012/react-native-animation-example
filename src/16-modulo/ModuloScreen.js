import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class ModuloScreen extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.parallel([
      Animated.timing(this.state.animation, {
        toValue: 12,
        duration: 3500
      }).start(() => this.state.animation.setValue(0))
    ]);
  };

  render() {
    const randomValue = 3;
    const newAnimated = Animated.modulo(this.state.animation, randomValue);
    const interpolate = newAnimated.interpolate({
      inputRange: [0, 3],
      outputRange: ['0deg', '270deg']
    });
    const animatedStyle = { transform: [{ rotate: interpolate }] };
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Text>hello</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { width: 100, height: 100, backgroundColor: 'red' }
});
