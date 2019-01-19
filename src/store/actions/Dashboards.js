import * as actionTypes from './actionTypes';

export const createDashboard = (newDashboardTitle) => {
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
    return {
        type: actionTypes.DELETEDASHBOARD,
        dashboardID: dashboardID
    };
};
