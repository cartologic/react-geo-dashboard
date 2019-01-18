import * as actionTypes from '../actions/actionTypes';

const initialState = {

};

const createDashboard = (state, action) => {
    const updatedState = state;
    console.log("Dashboard Created - " + action.newDashboardTitle);
    return updatedState;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_DASHBOARD: return createDashboard(state, action);
        default: return state;
    }
};

export default reducer;
