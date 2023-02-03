export const SET_CHECKBOX = 'SET_CHECKBOX';

export const toggleCheckbox = index => dispatch => {
    dispatch({
        type: SET_CHECKBOX,
        payload: index,
    });
}
