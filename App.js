/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    placeName: '',
    university: '',
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  }

  universityChangeHandler = val => {
    this.setState({
      university: val
    });
  }

  bah = () => {
    alert(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Drivee!</Text>
        <Text style={styles.instructions}>Rewarding safe driving habits</Text>
        <Text style={styles.questionHeading}>What's your name?</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.nameInput}
            placeholder="Alastair Parker"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />

          <TouchableOpacity 
            onPress={this.bah}
          >
            <Text style={styles.nameButton}> Submit </Text>
          </TouchableOpacity>
        </View>
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
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  nameInput: {
    width: "70%",
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  nameInput: {
    width: "70%",
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  nameButton: {
    width: "100%",
  },
  questionHeading: {
    marginTop: 50,
  },
  questionHeading2: {
    marginTop: 20,
  }
});
