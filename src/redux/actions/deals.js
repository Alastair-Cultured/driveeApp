import { SELECT_DEAL, DESELECT_DEAL } from './actionTypes';


export const selectDeal = (key) => {
	return {
		type: SELECT_DEAL,
		dealKey: key
	};
};

export const deselectDeal = () => {
	return {
		type: DESELECT_DEAL
	};
};