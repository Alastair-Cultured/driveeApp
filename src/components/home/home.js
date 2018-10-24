import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class Home extends Component {
	state = {
		name: '',
	}
	
	nameChangeHandler = val => {
		this.setState({
			name: val
		});
	}
  render() {
    return (
      <View style={styles.container}>
				<Text style={styles.welcome}>Welcome to Drivee!</Text>
				<Text style={styles.instructions}>Rewarding your safe driving habits</Text>
				<Text style={styles.questionHeading}>What's your name?</Text>
				
				<View style={styles.inputContainer}>
					<TextInput 
						style={styles.nameInput}
						placeholder="Alastair Parker"
						value={this.state.name}
						onChangeText={this.nameChangeHandler}
					/>

					<TouchableOpacity 
						onPress={this.nameSubmitHandler}
					>
						<Text style={styles.nameButton}> Submit </Text>
					</TouchableOpacity>
				</View>

				<View>
					<Text>Your Name is: {this.state.name}</Text>
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
		backgroundColor: '#F3D452',
		padding: 10,
	},
	inputContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: 10,
	},
	welcome: {
		fontSize: 30,
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
		borderRadius: 5,
		padding: 10,
	},
	nameButton: {
		borderWidth: 1,
		borderColor: '#0D4042',
		borderRadius: 3,
		padding: 3,
	},
	questionHeading: {
		marginTop: 50,
	},
	questionHeading2: {
		marginTop: 20,
	}
});

export default Home;