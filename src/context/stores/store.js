import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../slices/tasks.slice";
import checkboxReducer from "../slices/setting.slice";

export default configureStore({
    reducer: { 
        tasks: tasksReducer,
        checkbox: checkboxReducer
    },
});