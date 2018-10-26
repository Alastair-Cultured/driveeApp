import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const ListItem = props => {
	return (
		<TouchableOpacity onPress={props.onDealPressed}>
			<View style={styles.listItem}>
				<Image 
					resizeMode="cover" 
					source={props.dealImage}
					style={styles.dealImage} 
				/>
				<Text>
					<Text style={styles.dealPrice}>{props.dealPrice}</Text>
					 {props.dealDescription} @ {props.venueName}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
	},
	dealImage: {
		marginRight: 8,
		height: 30,
		width: 30
	},
	dealPrice: {
		fontWeight: 'bold',
		fontSize: 20,
	}
});

export default ListItem;