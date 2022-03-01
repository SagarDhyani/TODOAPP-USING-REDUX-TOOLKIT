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
      console.log("action:", action);
      return state.filter((todo) => todo.id !== action.payload);
    },

    updateItems: (state, action) => {
      console.log("actionid:", action.payload);

      state.map((todo) => {
        console.log("todoid:", todo.id);

        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        } else {
          // todo.title = todo.title
          return null;
        }
      });
    },
  },
});

export const { addTodo, toggleComplete, deleteItems, updateItems } =
  todoSlice.actions;

export default todoSlice.reducer;
