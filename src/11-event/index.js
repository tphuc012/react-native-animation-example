import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  ScrollView
} from 'react-native';

export default class EventScreen extends Component {
  state = { animation: new Animated.Value(1) };

  render() {
    const backgroundColorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)']
    });
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.animation
                }
              }
            }
          ])}
        >
          <Animated.View
            style={{
              height: 3000,
              width: 375,
              backgroundColor: backgroundColorInterpolate
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { width: 100, height: 100, backgroundColor: 'red' }
});
