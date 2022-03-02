import React, { useRef, useState } from "react";
import "./AddTodoForm.scss";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteItems, updateItems } from "../myRedux/todoSlice";

export const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);

  const inputRef = useRef();

  const btnRef = useRef();

  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todos);

  // inputRef.current.focus()

  const onSubmit = (e) => {
    e.preventDefault();

    if (value) {
      dispatch(
        addTodo({
          title: value,
        })
      );

      inputRef.current.value = "";
    }
  };
  return (
    <>
      <div className="groceryContainer">
        <p className="heading">Grocery Bud</p>

        <form onSubmit={onSubmit}>
          <input
            className="inputBox"
            ref={inputRef}
            type="text"
            placeholder="Add Items"
            onChange={(e) => setValue(e.target.value)}
          />
          {edit ? (
            <button
              className="btn"
              onClick={(e) => {
                console.log(e.target.value);
                setValue(e.target.value);

                todos.map((todo) => {
                  if (value) {
                    dispatch(
                      updateItems({
                        id: id,
                        title: value,
                      })
                    );

                    inputRef.current.value = "";

                    setEdit(false);
                    inputRef.current.placeholder = "Add items";
                  } else {
                    inputRef.current.placeholder = "Please write something";
                    // setEdit(false);
                  }
                });
              }}
              type="submit"
            >
              Update
            </button>
          ) : (
            <button className="btn" type="submit">
              Add
            </button>
          )}
        </form>

        <br></br>

        <div className="myList">
          <ul>
            {todos.map((todo) => (
              <div key={todo.id}>
                <p className="para">
                  {"\u2192"} {todo.title}
                </p>
                <br></br>

                <button
                  className="bttn2"
                  onClick={() => {
                    dispatch(deleteItems(todo.id));
                    
                    setEdit(false);
                    inputRef.current.placeholder = "Add Items";
                  }}
                >
                  Delete Item
                </button>
                <button
                  className="bttn2"
                  onClick={() => {
                    setEdit(true);
                    inputRef.current.placeholder = "update item";

                    setId(todo.id);

                    inputRef.current.focus();
                  }}
                >
                  Edit Item
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
