import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: Math.random() * 1000,
        text: action.payload,
        completed: false,
      });
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    update: (state, action) => {
      const data = state.todos.find((todo) => todo.id === action.payload);
      if (data) {
        data.completed = true;
      }
    },
    edit: (state, action) => {
      const data = state.todos.find((todo) => todo.id === action.payload.id);
      if (data) {
        data.text = action.payload.text;
      }
    },
  },
});

export const { add, remove, update } = todoSlice.actions;

export default todoSlice.reducer;
