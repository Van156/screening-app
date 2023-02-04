import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: 1,
            text: "Sample task",
            description: "This is a sample task",
            deadline: "3/2/2023",
            type: "Personal",
            color: "#10A19D",
            completed: false,
        },
    ],
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload];
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            let currentTaks = [...state.tasks];
            if (index >= 0) {
                currentTaks.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove task (id: ${action.payload.id}) as its not in tasks`
                );
            }
            state.tasks = currentTaks;
        },
        markComplete: (state, action) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            let currentTaks = [...state.tasks];
            if (index >= 0) {
                currentTaks[index].completed = true;
            } else {
                console.warn(
                    `Cant update task (id: ${action.payload.id}) as its not in tasks`
                );
            }
            state.tasks = currentTaks;
        }
    },
});

export const { addTask, removeTask, markComplete } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.tasks;

export default tasksSlice.reducer;