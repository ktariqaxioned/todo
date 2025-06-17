import { useState } from "react";
import { useDispatch } from "react-redux";

import { remove, update } from "../store/todoSlice";

import EditIcon from "../components/icons/edit-icon";
import UpdateIcon from "../components/icons/update-icon";
import DeleteIcon from "../components/icons/delete-icon";

const TodoCard = ({ data }) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(data.text);

  const handleDelete = (id) => {
    dispatch(remove(id));
  };
  const handleUpdate = (id) => {
    dispatch(update(id));
  };
  const handleEdit = (id, newText) => {
    dispatch(update({ id, text: newText }));
    setIsEdit(false);
  };

  return (
    <div className="item">
      {data.completed && <span>Done</span>}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={!isEdit}
        style={{
          backgroundColor: isEdit ? "#fff8c5" : "transparent",
          color: "#000",
          marginTop: "1.5rem",
          border: isEdit ? "1px solid #ccc" : "none",
          outline: isEdit ? "auto" : "none",
        }}
      />
      <div className="btns">
        <button
          onClick={
            isEdit ? () => handleEdit(data.id, text) : () => setIsEdit(true)
          }
        >
          <EditIcon />
        </button>
        <button onClick={() => handleUpdate(data.id)}>
          <UpdateIcon />
        </button>
        <button onClick={() => handleDelete(data.id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
