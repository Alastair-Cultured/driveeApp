import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from "./listItem";

const DealList = props => {
	return (
		<FlatList
			style={styles.listContainer}
			data={props.deals}
			renderItem={(info) => (
				<ListItem
					venueName={info.item.venueName}
					dealImage={info.item.image}
					dealDescription={info.item.dealDescription}
					dealPrice={info.item.dealPrice}
					onDealPressed={() => props.onDealSelected(info.item.key)}
				/>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		width: "100%",
		marginTop: '5%',
	},
});

export default DealList;