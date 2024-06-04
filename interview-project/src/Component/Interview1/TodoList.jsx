import React, { useState } from "react";
import "./Interview1.css";

function TodoItem({ todo, onDelete, onUpdate }) {
  const [updatedData, setUpdatedData] = useState(todo);
  const [edit, setEdit] = useState(false);

  const handleUpdate = ()=>{
    onUpdate(updatedData);
    setEdit(false);
  }

  return (
    <div className="single-todo">
      {!edit ? (
        <>
          <input readOnly id="todo-data" value={updatedData} />
          <div className="todo-actions">
            <button onClick={(event)=> setEdit(true)} >Edit</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <input id="todo-data" value={updatedData} onChange={(event)=> setUpdatedData(event.target.value)} />
          <div className="todo-actions">
            <button onClick={(event)=> setEdit(false)} >Cancel</button>
            <button onClick={handleUpdate} >Submit</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
{
  /* <input id="todo-data" />
      <div className="todo-actions">
        <button>Cancel</button>
        <button>Submit</button>
      </div> */
}
