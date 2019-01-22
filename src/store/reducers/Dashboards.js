import * as actionTypes from '../actions/actionTypes';
const uuidv = require('uuid/v4');

const initialState = {
    newDashboardModalOpen: false,
    dashboardList: [],
    alertOpen: false,
    alertMessage: "Welcome Django User",
    alertColor: "success",
    editMode: false,
};

const createDashboard = (state, action) => {
    let updatedState = state;
    let newDashboardList = updatedState.dashboardList;
    let currentDate = new Date();
    newDashboardList.push({
        title: action.newDashboardTitle,
        theme: "",
        id: uuidv(),
        date_created: currentDate,
        widgets: [],
    })
    localStorage.setItem("dashboardList", JSON.stringify(newDashboardList));
    updatedState = {
        newDashboardModalOpen: false,
        dashboardList: newDashboardList,
        alertOpen: true,
        alertMessage: "Dashboard Created Successfully!",
        alertColor: "success",
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
    let updatedState = state;
    for (let i=0; i<updatedState.dashboardList.length; i++) {
        if(updatedState.dashboardList[i].id === action.dashboardID) {
            let newDashboardList = updatedState.dashboardList;
            newDashboardList.splice(i, 1);
            localStorage.setItem("dashboardList", JSON.stringify(newDashboardList));
            updatedState = {
                dashboardList: newDashboardList,
                alertOpen: true,
                alertMessage: "Dashboard Deleted Successfully!",
                alertColor: "danger",
            };
            break;
        }
    }
    return {
        ...state,
        ...updatedState
    };
}

const dismissAlert = (state, action) => {
    const updatedState = {alertOpen: !state.alertOpen};
    return {
        ...state,
        ...updatedState
    };
}

const saveDashboard = (state, action) => {
    let updatedState = state;
    for (let i=0; i<updatedState.dashboardList.length; i++) {
        if(updatedState.dashboardList[i].id === action.dashboardObject.id) {
            let newDashboardList = updatedState.dashboardList;
            newDashboardList[i] = {
                ...newDashboardList[i],
                title: action.dashboardObject.title,
                theme: action.dashboardObject.theme,
            };
            localStorage.setItem("dashboardList", JSON.stringify(newDashboardList));
            updatedState = {
                dashboardList: newDashboardList,
                alertOpen: true,
                alertMessage: "Dashboard Updated Successfully! Please refresh to see the new changes!",
                alertColor: "success",
            };
            break;
        }
    }
    return {
        ...state,
        ...updatedState
    };
};

const toggleEditMode= (state, action) => {
    const updatedState = {editMode: !state.editMode};
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
        case actionTypes.DISMISSALERT: return dismissAlert(state, action);
        case actionTypes.SAVEDASHBOARD: return saveDashboard(state, action);
        case actionTypes.TOGGLEEDITMODE: return toggleEditMode(state, action);
        default: return state;
    }
};

export default reducer;
