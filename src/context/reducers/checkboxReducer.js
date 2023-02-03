import TOGGLE_CHECKBOX from '../actions/checkboxActions';

const initialState = [false, false, false];

const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      const newState = [...state];
      newState[action.index] = !newState[action.index];
      return newState;
    default:
      return state;
  }
};

export default checkboxReducer;