import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { gray } from 'ansi-colors';

const dataScreen = [
  'Opacity',
  'TranslatePosition',
  'Scale',
  'WidthHeightValues',
  'AbsolutePosition',
  'ColorsInterpolate',
  'Rotation',
  'WidthHeightPercent',
  'EasingScreen',
  'SpringScreen',
  'EventScreen'
];
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={dataScreen}
          //   contentContainerStyle={{ alignItems: 'center' }}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#c5c5c5',
                padding: 20,
                margin: 10
              }}
              onPress={() => this.props.navigation.navigate(item)}
            >
              <Text style={{ color: 'blue', textAlign: 'center' }}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
