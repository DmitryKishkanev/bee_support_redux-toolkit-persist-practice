import { createSlice } from '@reduxjs/toolkit';
import { todoInitialState } from './initialState';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialState,
  reducers: {
    createTodo: (state, action) => {
      state.todo.push(action.payload);
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const { createTodo } = todoSlice.actions;
