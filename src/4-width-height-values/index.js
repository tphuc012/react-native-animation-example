import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class WidthHeightValues extends Component {
  state = { animation: new Animated.Value(100) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 200,
      duration: 300
    }).start(() =>
      Animated.timing(this.state.animation, {
        toValue: 100,
        duration: 300
      }).start()
    );
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[styles.box, { width: this.state.animation }]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { width: 100, height: 100, backgroundColor: 'red' }
});
