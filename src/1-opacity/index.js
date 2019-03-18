import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

import Square from '../components/Square';

export default class Opacity extends Component {
  state = { animation: new Animated.Value(1) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
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
            style={[styles.box, { opacity: this.state.animation }]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { width: 100, height: 100, backgroundColor: 'red' }
});
