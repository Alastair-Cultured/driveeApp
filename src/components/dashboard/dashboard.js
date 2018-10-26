import React, {Component} from 'react';
import { StyleSheet, View, } from 'react-native';

import DealList from './dealList';

class Dashboard extends Component {
	state = {
		selectedDeal: null,
    deals: [
			{
				venueName: "Varsity",
				dealDescription: "Pint",
				dealPrice: "$5 ",
				expiry: "3 days",
				image: {
					uri:
						"https://www.instagram.com/p/BcJF8eDg49I/media/?size=l"
				},
				key: 1
			},{
				venueName: "Rocketfuel",
				dealDescription: "Large Flat What",
				dealPrice: "$3 ",
				expiry: "5 days",
				image: {
					uri:
						"https://www.instagram.com/p/BXIHGTRl9Qx/media/?size=l"
				},
				key: 2
			},{
				venueName: "Bayside Kitchen",
				dealDescription: "Eggs Benny",
				dealPrice: "$10 ",
				expiry: "14 days",
				image: {
					uri:
						"https://www.instagram.com/p/BhtGlNYDkfs/media/?size=l"
				},
				key: 3
			},{
				venueName: "Tenth State",
				dealDescription: "Large Flat White",
				dealPrice: "$3 ",
				expiry: "1 days",
				image: {
					uri:
						"https://www.instagram.com/p/BVEFS3SDhHW/media/?size=l"
				},
				key: 4
			},{
				venueName: "Burgermeister",
				dealDescription: "Cheesburger + Fries",
				dealPrice: "$8 ",
				expiry: "10 days",
				image: {
					uri:
						"https://www.instagram.com/p/BkmMz1xD4hG/media/?size=l"
				},
				key: 5
			},{
				venueName: "Felix & Co.",
				dealDescription: "Cold Brew",
				dealPrice: "$3 ",
				expiry: "6 days",
				image: {
					uri:
						"https://www.instagram.com/p/BQHQ4HYAHtV/media/?size=l"
				},
				key: 6
			},{
				venueName: "The Resident",
				dealDescription: "Expresso Martini",
				dealPrice: "$8 ",
				expiry: "2 days",
				image: {
					uri:
						"https://www.instagram.com/p/Bkl_OUoD2wA/media/?size=l"
				},
				key: 7
			}
		],
	};
	
	modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
	};
	
	dealSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedDeal: prevState.deals.find(deal => {
          return deal.key === key;
        })
      };
    });
  };

  render() {
    return (
			<View style={styles.container}>
				<DealList 
					deals={this.state.deals}
					onDealSelected={this.dealSelectedHandler}
				/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#F3D452",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export default Dashboard;