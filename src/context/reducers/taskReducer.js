import { ADD_TASK, REMOVE_TASK } from '../actions/taskActions';

const initialState = [];

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.task];
        case REMOVE_TASK:
            return state.filter((task, index) => index !== action.index);
        default:
            return state;
    }
}

export default taskReducer;