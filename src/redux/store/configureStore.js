import { createStore, combineReducers } from 'redux';

import dealsReducer from '../reducers/deals';

const rootReducer = combineReducers({
    deals: dealsReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;