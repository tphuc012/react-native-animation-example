import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class AddScreen extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 200,
      duration: 1000
    }).start(() => this.state.animation.setValue(0));
  };

  render() {
    const randomValue = new Animated.Value(50);
    const newAnimated = Animated.add(this.state.animation, randomValue);
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[styles.box, { transform: [{ translateY: newAnimated }] }]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { width: 100, height: 100, backgroundColor: 'red' }
});
