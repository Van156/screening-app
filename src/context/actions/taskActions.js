export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTasks = task => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload: task,
    });
};

export const removeTasks = index => dispatch => {
    dispatch({
        type: REMOVE_TASK,
        payload: index,
    });
};