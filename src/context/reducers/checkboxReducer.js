import SET_CHECKBOX from '../actions/checkboxActions';

const initialState = [false, false, false];

const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKBOX:
      return action.payload;
    default:
      return state;
  }
};

export default checkboxReducer;