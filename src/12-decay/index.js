import React, { Component } from 'react';
import { Text, StyleSheet, View, PanResponder, Animated } from 'react-native';

export default class DecayScreen extends Component {
  state = { animation: new Animated.ValueXY({ x: 0, y: 0 }) };
  UNSAFE_componentWillMount() {
    this._x = 0;
    this._y = 0;
    this.state.animation.addListener(value => {
      this._x = value.x;
      this._y = value.y;
    });
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        //   this.state.animation.setOffset({
        //     x: this._x,
        //     y: this._y
        //   });
        //   this.state.animation.setValue({ x: 0, y: 0 });
        //OR function below
        this.state.animation.extractOffset();
      },

      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animation.x,
          dy: this.state.animation.y
        }
      ]),
      onPanResponderRelease: (e, { vx, vy }) => {
        Animated.decay(this.state.animation, {
          velocity: { x: vx, y: vy },
          deceleration: 0.97
        }).start();
      }
    });
  }
  render() {
    const animatedStyle = {
      transform: this.state.animation.getTranslateTransform()
    };
    return (
      <View>
        <Animated.View
          style={[styles.box, animatedStyle]}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { width: 100, height: 100, backgroundColor: 'red' }
});
