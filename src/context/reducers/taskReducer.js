import { ADD_TASK, REMOVE_TASK } from '../actions/taskActions';

const initialState = [
    {
        id: 1,
        text: 'Activity 1: Now with ES6 we have a very powerful spread operator (...Object) which can make this job very easy. It can be done as follows.',
        completed: false,
    },
    {
        id: 2,
        text: 'Activity 2',
        deadline: '20/20/2020',
        type: 'Personal',
        completed: false,
    },
    {
        id: 3,
        text: 'Activity 3',
        color: '#000',
        type: 'Personal',
        completed: false,
    }
];

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