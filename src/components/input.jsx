import { useState } from "react";
import { add } from "../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";

export const Input = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handelSubmit = (e) => {
    try {
      if (text.trim()) {
        dispatch(add(text));
        setText("");
      } else {
        alert("Text is empty");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add_todo">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit" onClick={handelSubmit}>
        +
      </button>
    </div>
  );
};
