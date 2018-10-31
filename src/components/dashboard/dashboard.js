import React, {Component} from 'react';
import { StyleSheet, View, } from 'react-native';
import { connect } from "react-redux";

import DealList from './dealList';
import DealDetail from './dealDetail';

import { selectDeal, deselectDeal } from "../../redux/actions/index";

class Dashboard extends Component {
	modalClosedHandler = () => {
    this.props.onDeselectDeal();
	};
	
	dealSelectedHandler = key => {
    this.props.onSelectDeal(key);
    console.log('bah');
  };

  render() {
    return (
			<View style={styles.container}>
				<DealDetail
          selectedDeal={this.props.selectedDeal}
					onModalClosed={this.modalClosedHandler}
        />
				<DealList 
					deals={this.props.deals}
					onDealSelected={this.dealSelectedHandler}
				/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#F3D452",
		alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    deals: state.deals.deals,
    selectedDeal: state.deals.selectedDeal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectDeal: key => dispatch(selectDeal(key)),
    onDeselectDeal: () => dispatch(deselectDeal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);