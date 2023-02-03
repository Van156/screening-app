export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export const toggleCheckbox = index => dispatch => {
    dispatch({
        type: TOGGLE_CHECKBOX,
        payload: index,
    });
}
