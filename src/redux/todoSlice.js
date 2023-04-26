import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    todos: []
}

let todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        }
    }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;