import React, { useState } from "react";
import "./Interview1.css";

function TodoItem({ todoData, onDelete, onUpdate }) {
  const [fetchedData, setFetchedData] = useState(todoData);
  const [enableEdit, setEnableEdit] = useState(false);

  const handleUpload =()=>{
    console.log("It is cliked");
    onUpdate(fetchedData);
    setEnableEdit(false);
  }

  return (
    <div className="single-todo">
      {!enableEdit ? (
        <>
          <input value={todoData} readOnly id="todo-data" />
          <div className="todo-actions">
            <button onClick={() => setEnableEdit(true)}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <input value={fetchedData} onChange={(event)=> setFetchedData(event.target.value)} id="todo-data" />
          <div className="todo-actions">
            <button onClick={()=> setEnableEdit(false)} >Cancel</button>
            <button  onClick={handleUpload} >Submit</button>
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
