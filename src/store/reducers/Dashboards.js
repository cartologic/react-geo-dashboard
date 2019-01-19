import * as actionTypes from '../actions/actionTypes';
const uuidv = require('uuid/v4');

const initialState = {
    newDashboardModalOpen: false,
    dashboardList: [],
    deleteDashboardModalOpen: false,
};

const createDashboard = (state, action) => {
    let updatedState = state;
    let newDashboardList = updatedState.dashboardList;
    let currentDate = new Date();
    newDashboardList.push({
        title: action.newDashboardTitle,
        id: uuidv(),
        date_created: currentDate,
    })
    localStorage.setItem("dashboardList", JSON.stringify(newDashboardList));
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

const loadSavedDashboards = (state, action) => {
    let updatedState = state;
    const storedData = localStorage.getItem("dashboardList");
    if (storedData) {
        const newDashboardList = JSON.parse(storedData);
        updatedState = {dashboardList: newDashboardList};
    }
    return {
        ...state,
        ...updatedState
    };
}

const deleteDashboard = (state, action) => {
    const updatedState = {deleteDashboardModalOpen: !state.deleteDashboardModalOpen};
    return {
        ...state,
        ...updatedState
    };
}

const continueDeleteDashboard = (state, action) => {
    let updatedState = state;
    for (let i = 0; i < state.dashboardList.length; i++) {
        if(state.dashboardList[i].id === action.dashboardID) {
            let newDashboardList = state.dashboardList;
            newDashboardList.splice(i, 1);
            localStorage.setItem("dashboardList", JSON.stringify(newDashboardList));
            updatedState = {
                deleteDashboardModalOpen: false,
                dashboardList: newDashboardList,
            };
            break;
        }
    }
    return {
        ...state,
        ...updatedState
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_DASHBOARD: return createDashboard(state, action);
        case actionTypes.TOGGLENEWDASHBOARDMODAL: return toggleNewDashboardModal(state, action);
        case actionTypes.LOADSAVEDDASHBOARDS: return loadSavedDashboards(state, action);
        case actionTypes.DELETEDASHBOARD: return deleteDashboard(state, action);
        case actionTypes.CONTINUEDELETEDASHBOARD: return continueDeleteDashboard(state, action);
        default: return state;
    }
};

export default reducer;
