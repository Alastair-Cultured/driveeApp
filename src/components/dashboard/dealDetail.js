import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const dealDetail = props => {
  let modalContent = null;

  if (props.selectedDeal) {
    modalContent = (
      <View>
        <Image source={props.selectedDeal.image} style={styles.dealImage} />
        <Text style={styles.dealName}>{props.selectedDeal.venueName}</Text>
        <Text style={styles.dealPriceDesc}>{props.selectedDeal.dealPrice}{props.selectedDeal.dealDescription}</Text>
      </View>
    );
  }
  return (
		<View style={styles.modal}>
			<Modal
				onRequestClose={props.onModalClosed}
				visible={props.selectedDeal !== null}
				animationType="slide"
				
			>
				<View style={styles.modalContainer}>
					{modalContent}
					<View>
						<Button title="Close" onPress={props.onModalClosed} />
					</View>
				</View>
			</Modal>
		</View>
  );
};

const styles = StyleSheet.create({
  modal: {
		flex: 1,
    // backgroundColor: "#F3D452",
  },
  modalContainer: {
		backgroundColor: "#F3D452",
		height: '100%'
  },
  dealImage: {
    width: "100%",
    height: 200
  },
  dealName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 50
  },
  dealPriceDesc: {
		fontSize: 40,
		textAlign: "center",
  }
});

export default dealDetail;
