import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  Easing
} from 'react-native';

export default class EasingScreen extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1000,
      // easing: Easing.back(5)
      // easing: Easing.bounce
      // easing: Easing.elastic(3)
      easing: Easing.bezier(0.06, 1, 0.88, 0.23)
    }).start(() => this.state.animation.setValue(0));
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[
              styles.box,
              { transform: [{ translateY: this.state.animation }] }
            ]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { width: 100, height: 100, backgroundColor: 'red' }
});
