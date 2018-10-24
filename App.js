import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import Home from './src/components/home/home';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
