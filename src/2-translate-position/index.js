import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default class TranslatePosition extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 500,
      duration: 1000
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
