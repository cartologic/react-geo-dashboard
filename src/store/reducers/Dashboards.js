import * as actionTypes from '../actions/actionTypes';

const initialState = {
    newDashboardModalOpen: false,
    dashboardList: [],
};

const createDashboard = (state, action) => {
    let updatedState = state;
    let newDashboardList = updatedState.dashboardList;
    newDashboardList.push({
        title: action.newDashboardTitle,
        id: 1,
    })
    localStorage.setItem('dashboardList', JSON.stringify(newDashboardList));
    updatedState = {
        newDashboardModalOpen: false,
        dashboardList: newDashboardList,
    };
    return {
        ...state,
        ...updatedState
    };
}

const toggleNewDashboardModal = (state, action) => {
    const updatedState = {newDashboardModalOpen: !state.newDashboardModalOpen};
    return {
        ...state,
        ...updatedState
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_DASHBOARD: return createDashboard(state, action);
        case actionTypes.TOGGLENEWDASHBOARDMODAL: return toggleNewDashboardModal(state, action);
        default: return state;
    }
};

export default reducer;
