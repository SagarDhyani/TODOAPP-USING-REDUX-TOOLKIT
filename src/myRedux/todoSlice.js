import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };

      state.push(newTodo);
    },

    deleteItems: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    updateItems: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        } else {
          return null;
        }
      });
    },
  },
});

export const { addTodo, toggleComplete, deleteItems, updateItems } =
  todoSlice.actions;

export default todoSlice.reducer;
