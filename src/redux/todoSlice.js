import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    todos: [],
    currentEditIndex: false
}

let todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos.splice(action.payload, 1);
        },
        saveEditIndex:(state,action)=>{
            state.currentEditIndex =action.payload;
        },
        editMyTodo:(state,action)=>{
            state.todos[state.currentEditIndex]=action.payload;
            state.currentEditIndex=false;
        }
    }
});

export const { addTodo, deleteTodo,saveEditIndex,editMyTodo } = todoSlice.actions;
export default todoSlice.reducer;