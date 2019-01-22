import * as actionTypes from './actionTypes';

export const createDashboard = (newDashboardTitle) => {
    return dispatch => {
        dispatch(processWithCreateDashboard(newDashboardTitle));
        setTimeout(() => {
            dispatch(dismissAlert());
        }, 1 * 5000);
    }
};

const processWithCreateDashboard = (newDashboardTitle) => {
    return {
        type: actionTypes.CREATE_DASHBOARD,
        newDashboardTitle: newDashboardTitle
    };
};

export const toggleNewDashboardModal = () => {
    return {
        type: actionTypes.TOGGLENEWDASHBOARDMODAL
    };
};

export const loadSavedDashboards = () => {
    return {
        type: actionTypes.LOADSAVEDDASHBOARDS
    };
};

export const deleteDashboard = (dashboardID) => {
    return dispatch => {
        dispatch(proceedWithDeleteDashboard(dashboardID));
        setTimeout(() => {
            dispatch(dismissAlert());
        }, 1 * 5000);
    }
};

const proceedWithDeleteDashboard = (dashboardID) => {
    return {
        type: actionTypes.DELETEDASHBOARD,
        dashboardID: dashboardID
    };
};

export const dismissAlert = () => {
    return {
        type: actionTypes.DISMISSALERT
    };
};

export const saveDashboard = (dashboardObject) => {
    return {
        type: actionTypes.SAVEDASHBOARD,
        dashboardObject: dashboardObject
    };
};

export const toggleEditMode = () => {
    return {
        type: actionTypes.TOGGLEEDITMODE
    };
};
