import * as actionTypes from '../actions/actionTypes';

const initialState = {
    newDashboardModalOpen: false,
};

const createDashboard = (state, action) => {
    const updatedState = state;
    console.log("Dashboard Created - " + action.newDashboardTitle);
    return updatedState;
}

const toggleNewDashboardModal = (state, action) => {
    let updatedState = state;
    const newDashboardModalOpen = updatedState.newDashboardModalOpen;
    updatedState = {newDashboardModalOpen: !newDashboardModalOpen};
    return updatedState;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_DASHBOARD: return createDashboard(state, action);
        case actionTypes.TOGGLENEWDASHBOARDMODAL: return toggleNewDashboardModal(state, action);
        default: return state;
    }
};

export default reducer;
