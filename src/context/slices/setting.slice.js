import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    checkbox: [false, false, false]
}

export const checkboxSlice = createSlice({
    name: 'checkbox',
    initialState,
    reducers: {
        setCheckbox: (state, action) => {
            state.checkbox = action.payload;
        }
    }
});

export const { setCheckbox } = checkboxSlice.actions;
export const selectCheckbox = state => state.checkbox.checkbox;

export default checkboxSlice.reducer;