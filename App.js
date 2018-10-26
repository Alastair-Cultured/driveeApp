// 

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './src/components/home/home';
import Dashboard from './src/components/dashboard/dashboard';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Home /> */}
        <Dashboard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3D452',
  },
});
