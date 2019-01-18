import * as actionTypes from './actionTypes';

export const createDashboard = (newDashboardTitle) => {
    return {
        type: actionTypes.CREATE_DASHBOARD,
        newDashboardTitle: newDashboardTitle
    };
};
