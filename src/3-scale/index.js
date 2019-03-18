import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class Scale extends Component {
  state = { animation: new Animated.Value(1) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -2,
      duration: 1000
    }).start(() =>
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1000
      }).start()
    );
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[
              styles.box,
              { transform: [{ scale: this.state.animation }] }
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
